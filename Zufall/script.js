// Erstelle zwei Zufallszahl zwischen 0 und 100

let random1 = Math.random() * 100
let random1AsInteger = Math.round(random1)

let random2 = Math.random() * 100
let random2AsInteger = Math.round(random2)

console.log(random1AsInteger)
console.log(random2AsInteger)

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

if (random1AsInteger < random2AsInteger && random1AsInteger < 50 ) {
  console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

if (random1AsInteger < 30 || random2AsInteger < 30) {
  console.log("Eine der beiden ist kleiner als 30")
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

if (random1AsInteger < 50 && random2AsInteger != 50) {
  console.log("Erste Zahl klein, zweite kein 50iger")
}
