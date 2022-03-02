export default class car {
  horsepower = 70;
  constructor(color, brand, country ="Germany"){
    this.color = color;
    this.brand = brand;
    this.country = country;
  }

  printSpecifications(){
    console.log(this.color + " - " + this.brand + " - " + this.horsepower + " - " + this.country);

  }
  
}

