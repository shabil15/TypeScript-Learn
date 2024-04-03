// class User{
//   email:string
//   name:string

//   constructor(email:string,name:string) {
//     this.email=email,
//     this.name=name
//   }
// }

// let user1= new User('h@h.com','shabil')
// console.log(user1);

class Person {
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name = name;
    this.age = age
  }

  greet(){
    console.log(`Hello ${this.name} age ${this.age}`);
    
  }

}

const person23= new Person("Jog",33)
person23.greet()


// export {}


class Student extends Person {
  studentId:string;

  constructor(name:string,age:number,studentId:string) {
    super(name,age);
    this.studentId = studentId;
  }

  study(){
    console.log(`${this.name} is studying`);
  }
}

const student = new Student ('Alice',23,'232');

student.greet()
student.study();