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

function markTask(element){
  let index = element.attributes["data-index"].value;
  let isChecked =  element.checked;
  
  tasks[index].isDone = isChecked;
  printTaskList();
}

function getHtmlTasks() {
  let html = "";
  let index = 0;

  tasks.forEach(element => {
    let checked = "";
    if (element.isDone) {
      checked = "checked";
    }
    html += "<li><input onClick='markTask(this)' name= 'checkbox' data-index='" + index + "' type='checkbox'" + checked + "/>" + element.isDone + "-" + element.name + "-" + element.responsible + "-" + index + "</li>"
    index++;
  });
  return html
}
