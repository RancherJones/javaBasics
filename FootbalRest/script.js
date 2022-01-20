
fetch('https://api.football-data.org/v2/competitions/2002/teams',{
  headers: {
    "x-auth-token" : "819babc7902454f930c154272296d78"
  }
})
.then(response => response.json())
.then(function(data){
  let html="";
  data.teams.forEach(element => {
    html += "<li>" + element.name + "</li>";
    
  });
  document.getElementById("teams").innerHTML = html
});