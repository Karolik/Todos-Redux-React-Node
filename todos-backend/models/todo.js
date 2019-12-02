const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");
mongoose.set("debug", true);    //log any mongoose queries for debugging
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({    //a simple schema where all todos will have a task
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
