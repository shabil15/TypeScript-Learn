// async function fetchData<T>(url:string)

function add<T extends number>(n1:T,n2:T):T | number {
  return n1+n2
}

console.log(add(123,23));
 