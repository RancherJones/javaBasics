function registerEvents(){
  document.getElementById("load__todo__btn").addEventListener("click",function(){
    loadTodo();
  })
  document.getElementById("load__user__btn").addEventListener("click",function(){
    alert("user")
  })
}

function loadTodo(){
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
      return response.json();
    })
    .then(function (data){
      let html = "";
      data.forEach(todo => {
        html += "<li>" + todo.title + "</li>"
        
      });

      document.getElementById("todo__li").innerHTML = html;
      console.log(html);
    })
    .catch(function (err){
      console.log(err);
    })
}

registerEvents();