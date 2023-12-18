const dateElement = document.querySelector(".date");
const greetingElement = document.querySelector(".greeting h2");
const tasksElement = document.querySelector(".todoDetails");

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
const todos = [];

dateElement.innerHTML = `${month}<br>${day}`;

const currentHour = new Date().getHours();
currentDate = new Date().getDate();
const input = document.querySelector('input[type="text"]');

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

function Add() {
  const input = document.getElementById("todoInput");
  if (input.value == "") {
    alert("Please Enter The Task !!!!");
  }
}

function Remove() {
  const input = document.getElementById("todoInput");
  tasksElement.remove();
}
