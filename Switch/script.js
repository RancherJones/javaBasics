let random1 = (Math.random() * (10 - 5)) + 5 
let random1AsInteger = Math.round(random1)

console.log(random1AsInteger)

if (random1AsInteger == 10) {
  console.log("Ten")
} else if (random1AsInteger == 9) {
  console.log("nine")
} else if (random1AsInteger == 8) {
  console.log("eight")
} else if (random1AsInteger == 7) {
  console.log("seven")
} else if (random1AsInteger == 6) {
  console.log("six")
} else {
  console.log("five")
}
  


