let count = 10
const decrement = ()=>{
  count = count -1
  console.log(count);
}


setInterval(decrement,1000)