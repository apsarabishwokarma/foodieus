const dateElement = document.querySelector(".date");
const greetingElement = document.querySelector(".greeting h2");
const addElement = document.querySelector(".addbtn");
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

const todoForm = document.querySelector("#todoForm");

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
  console.log(todos);
});

function remove(idToRemove) {
  removeTodoById(idToRemove);
}

function removeTodoById(idToRemove) {
  todos = todos.filter((todo) => todo.id !== idToRemove);
  console.log(todos);
}
