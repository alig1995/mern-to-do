const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();

let Todo = require("./models/todo");
const port = 5000;
const server = express();

server.use(bodyParser.json());
server.use(cors());

//connect to mongo
mongoose.connect("mongodb://localhost:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to localhost mongo db");
});
todoRoutes.route("/").get((req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});
todoRoutes.route("/:id").get((req, res) => {
  let id = req.params.id;

  Todo.findById(id, (err, todo) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todo);
    }
  });
});
todoRoutes.route("/add").post((req, res) => {
  let todo = new Todo(req.body);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch(err => {
      res.status(400).json("faild to create new task");
    });
});
todoRoutes.route("/update/:id").post((req, res) => {
  let id = req.params.id;

  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("data not found");
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then(todo => {
          res.json("todo updated");
        })
        .catch(err => {
          res.status(400).send("Update failed");
        });
    }
  });
});
server.get("/", (req, res) => res.send("Hello World!"));

server.use("/todos", todoRoutes);
server.listen(port, () => console.log(`Server listening on port ${port}!`));
