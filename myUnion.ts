let score :number | string  = 33

score = 44
score ='55'


type User ={
  name:string;
  id:number
}

type Admin  ={
  username:string;
  id:number
}

let hitesh: User | Admin = {name:'hitesh',id:345}

hitesh = {username:'hc',id:334 }

function getDBId(id:number | string){
  console.log(`DB is :${id}`);
  
}

getDBId(3)
getDBId("3")


//array

const data:number[] = [1,2,3]
