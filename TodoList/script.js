const dateElement = document.querySelector(".date");
const greetingElement = document.querySelector(".greeting h2");
const addElement = document.querySelector(".addbtn");
const tasksContainer = document.getElementById("tasks");

const apiURL = "http://localhost:3000";

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

const todoForm = document.querySelector("form");

todoForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const title = document.getElementById("todoInput").value;

  if (title.length === 0) {
    alert("Enter the task name!!!");
    return;
  }

  const _currentDate = new Date();
  const date = _currentDate.toDateString();

  const newTodo = {
    title: title,
    completed: false,
    date: date,
    id: `todotask${todos.length + 1}${_currentDate.toISOString()}`, //to get unique ids
  };

  todos = await addTodoToServer(newTodo);
  // todos.push(newTodo); // since we are performing this logic in backend now

  document.getElementById("todoInput").value = "";
  renderTodos();
});

function renderTodos() {
  tasksContainer.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    tasksContainer.innerHTML += `
      <div class="todoDetails">
        <input type="checkbox" id="${todo.id}" ${
      todo?.completed ? "checked" : ""
    } onchange="toggleComplete(this)"/>

        <label for="${todo.id}" >
          <div class="todoDate">${todo.date}</div>
          <p class="task">${todo.title}</p>
        </label>

        <i class="fa-solid fa-trash" onclick="remove('${todo.id}')"></i>
    </div>
    `;
  }
  // localStorage.setItem("todos", JSON.stringify(todos));
}

function toggleComplete(target) {
  console.log(target);
  const id = target.id;

  todos = todos.map((t) => {
    if (id === t.id) {
      const newTodo = {
        ...t,
        completed: target.checked,
      };

      return newTodo;
    } else {
      return t;
    }
  });

  renderTodos();
}

function remove(idToRemove) {
  todos = todos.filter((todo) => todo.id !== idToRemove);
  renderTodos();
}

addEventListener("DOMContentLoaded", (event) => {
  populateItems();
});

function populateItems() {
  // Local Storage data
  // const localTodos = localStorage.getItem("todos");
  // if (localTodos) {
  //   //not equal to  undefined
  //   todos = JSON.parse(localTodos); //string to object
  //   renderTodos();
  // }
}

// Server side code

async function addTodoToServer(todo) {
  const res = await fetch(`${apiURL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      ...todo,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  return await res?.json();
}
