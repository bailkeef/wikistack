const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author name" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="author email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="text" class="col-sm-2 control-label">Content Text</label>
      <div class="col-sm-20">
        <textarea id="content" rows="4" cols="80"></textarea>

      </div>
    </div>

    <div class="form-group">
      <label for="status-field" class="col-sm-2 control-label">Status field</label>
      <div class="col-sm-10">
      <select id="open-close">
        <option value="open">open</option>
        <option value="close">close</option>
      </select>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
