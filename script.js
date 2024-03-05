const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = document.getElementById("add-task");

// add task function
function createTask() {
  if (inputBox.value === "") {
    document.querySelector(".error").innerHTML = "You must type a task!";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    document.querySelector(".error").innerHTML = "";
  }
  inputBox.value = "";
  saveData();
}
addTask.addEventListener("click", function () {
  createTask();
});
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createTask();
  }
});

// changing state of task and removing task
listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// saving tasks in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// showing tasks from local storage
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
