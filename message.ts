// function greet(name:string):string{
//   return `Hello ${name}`
// }


// let message:string = greet('Javad');
// console.log(message);

// type Person = {
//   name:string,
//   age :number
// }



interface Person {
  name:string,
  age:number
}

interface Student extends Person {
  role:number
}


let person :Person = {name:'shabil',age:22}
let student :Student = {name:'javad',age:34,role:23}

export {}