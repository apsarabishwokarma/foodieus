const dateElement = document.querySelector(".date");
const greetingElement = document.querySelector(".greeting h2");
const addElement = document.querySelector(".addbtn");
const tasksContainer = document.getElementById("tasks");
let todos = [];
const currentDate = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthIndex = currentDate.getMonth();
const month = months[monthIndex].substring(0, 3);
const day = currentDate.getDate();

dateElement.innerHTML = `${month}<br>${day}`;

const currentHour = new Date().getHours();

let greeting;

// 12:00AM - 12:00PM - Good Morning!
// 12:00PM - 6:00PM - Good Afternoon!
// 6:00PM - 12:00AM - Good Evening!

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good Morning!";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

greetingElement.innerHTML = greeting;

function add() {
  const input = document.getElementById("todoInput");
  if (input.value == "") {
    alert("Please Enter The Task !!!!");
  }
}

const todoForm = document.querySelector("form");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("todoInput").value;
  currentDate = new Date();
  const date = currentDate.toDateString();

  const newTodo = {
    title: title,
    date: date,
    completed: false,
    id: `todotask${todos.length + 1}`,
    class: `todotask${todos.length + 1}`,
  };
  todos.push(newTodo);
  renderTodos(newTodo);
  console.log(todos);
});

function renderTodos(todo) {
  const todoDetails = document.createElement("div");
  todoDetails.classList.add("todoDetails");
  todoDetails.id = todo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox_${todo.id}`;

  const label = document.createElement("label");
  label.setAttribute("for", `checkbox_${todo.id}`);
  label.classList.add("todotask");

  const todoDate = document.createElement("div");
  todoDate.classList.add("todoDate");
  todoDate.textContent = todo.date;

  const task = document.createElement("p");
  task.classList.add("task");
  task.textContent = todo.title;

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-check");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteIcon.onclick = function () {
    remove(idToRemove);
  };

  label.appendChild(todoDate);
  label.appendChild(task);
  label.appendChild(icon);

  todoDetails.appendChild(checkbox);
  todoDetails.appendChild(label);
  todoDetails.appendChild(deleteIcon);

  tasksContainer.appendChild(todoDetails);
}

function remove(idToRemove) {
  removeTodoById(idToRemove);
}

function removeTodoById(idToRemove) {
  todos = todos.filter((todo) => todo.id !== idToRemove);
  console.log(todos);
}
