// JSON javascripz object notation



const tasks = [];
console.log(tasks);



document.getElementById("addTask").addEventListener("click", function () {
  addTask();
});

function addTask() {
  let taskName = document.getElementById("textNewTask").value;
  let taskResponsible = document.getElementById("textResponsible").value;
  let task = { name: taskName, responsible: taskResponsible, isDone: false }
  tasks.push(task);
  printTaskList();
}

function printTaskList() {
  document.getElementById("taskList").innerHTML = getHtmlTasks();

}

function getHtmlTasks() {
  let html = "";
  tasks.forEach(element => {
    let checked = "";
    if (element.isDone) {
      checked = "checked";
    }
    html += "<li><input type='checkbox'" + checked + "/>" + element.isDone + "-" + element.name + "-" + element.responsible + "</li>"
  });
  return html
}