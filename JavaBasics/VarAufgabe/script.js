let banana = "Banane";
let apple = "Apple";

//price in Euro
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Weight in Kilo
let bWeight = 0.34;
let aWeight = 0.22;

// price forone fruit
let b1 = bananaPricePerKilo * bWeight;
let a1 = applePricePerKilo * aWeight;

// price fpr specific amt fruit 
let a8 = a1 * 8;
let b17 = b1 * 17;

// Price for 1 ton fruit
let tonB = bananaPricePerKilo * 1000;
let tonA = applePricePerKilo * 1000;

console.log(a8 + "€");
console.log(b17 + "€");
console.log(tonA + "€");
console.log(tonB + "€");