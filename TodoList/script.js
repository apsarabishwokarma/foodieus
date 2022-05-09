const dateElement = document.querySelector(".date");
const greetingElement = document.querySelector(".greeting h2");
const addElement = document.querySelector(".addbtn");

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

// Todo Form
// todos = [{ title: "Make something", date: "", completed: true, id:'todoList1' }]

document.querySelector("#addbtn").onclick = function () {
  if (document.querySelector("todotask p").value.length == 0) {
    alert("Kindly Enter Task Name!!!!");
  }
};
