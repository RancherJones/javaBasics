class Person {
  constructor(name){
    this.name = name
  }

  printNamearrow(){
    setTimeout(() =>{
      console.log('Arrow: ' + this.name)
    }, 100)
  }

  printNameFunction(){
    setTimeout(function(){
      console.log('function: ' + this.name)
    }, 100)
  }
}

let person = new Person('Bob')
person.printNamearrow();
person.printNameFunction();
console.log(this.name)