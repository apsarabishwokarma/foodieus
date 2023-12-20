const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json()); // to accept json, so that req.body can accept json from client
app.use(cors());

const todos = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed,
    date: req.body.date,
  };

  todos.push(newTodo);

  res.send(todos);
});

app.delete("/todos/:id", (req, res) => {
  const idToRemove = req.params.id;
  const todos = todos.filter((todo) => todo.id !== idToRemove);

  res.send(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
