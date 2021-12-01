const task = ["putzen","tanzen","kochen"];
printTaskList();



document.getElementById("addTask").addEventListener("click",function(){
  let newTask = document.getElementById("textNewTask").value;
  task.push(newTask);
  printTaskList();
});

function printTaskList(){
document.getElementById("taskList").innerHTML = getHtmlTasks();

}

function getHtmlTasks(){
  let html = "";
  task.forEach(element => {
    html += "<li>" + element + "</li>"
  });
  return html
}