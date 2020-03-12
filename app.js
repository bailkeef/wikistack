const express = require('express');
const morgan = require('morgan');
const app = express();
const { db, Page, User }   = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
  res.send('hi 2000');
})

// take force off if deploying the app
const createModels = async () => {
    await db.sync({force: true})

}
createModels()


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


