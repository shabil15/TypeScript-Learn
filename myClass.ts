class User{
  email:string
  name:string

  constructor(email:string,name:string) {
    this.email=email,
    this.name=name
  }
}

let user1= new User('h@h.com','shabil')
console.log(user1);


export {}
