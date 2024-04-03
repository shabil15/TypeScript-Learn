//Encapsulation

// class Car{
//   private speed :number;

//   constructor (speed:number){
//     this.speed= speed
//   }

//   accelerate(){
//     this.speed +=10;
//   }

//   getSped(){
//     return this.speed;
//   }
// }

//abstraction

abstract class Animal {
  abstract makeSound():void
}

class Dog extends Animal {
  makeSound(): void {
      console.log('woof!');
      
  }
}

class Vehicle {
  move(){
    console.log('Vehicle is moving');
    
  }
}

class Car extends Vehicle {
  accelerate(){
    console.log('Car is accelerating');
  }
}

function makeSound(animal:Animal){
  animal.makeSound()
}

const dog = new Dog();
makeSound(dog);

let tupsdle: [string, number] = ["Alice", 30];

type arrrr = number
let num:arrrr = 123

type  point  = [string,number]

let arr232 :point = ["23",32]


type po <T> = {
  name:T
  ,age:T
}
let ong = {name:1,age:1}