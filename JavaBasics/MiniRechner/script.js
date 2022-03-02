
function buttonClickedA(){
  console.log("clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let result = parseFloat(num1) + parseFloat(num2);
 
  console.log(result);
}

function buttonClickedS(){
  console.log("clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let result = parseFloat(num1) - parseFloat(num2);
 
  console.log(result);
}

function buttonClickedM(){
  console.log("clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let result = parseFloat(num1) * parseFloat(num2);
 
  console.log(result);
}

function buttonClickedD(){
  console.log("clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let result = parseFloat(num1) / parseFloat(num2);
 
  console.log(result);
}