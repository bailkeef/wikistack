const express = require('express');
const morgan = require('morgan');
const app = express();
const { db, Page, User }   = require('./models');
const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/user');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
// app.use('/user', userRouter);

app.get('/', (req, res) =>{
  res.send('hi /');
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


