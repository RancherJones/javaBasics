function generate(){
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let amountOfRandomnumbers = parseInt(num2) - parseInt(num1) + 1

  let randomnumber = Math.floor(Math.random() * amountOfRandomnumbers) + parseInt(num1);
  document.getElementById("output").innerHTML= randomnumber
}