// 1st way of doing this function with database
let x=2;
let y=3;
let result=x+y;
async function fetchalldata() {
    let fetchdata=await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(await fetchdata.json());
}
fetchalldata()
console.log(result);// this will run first becoz function is taking timewhich shift to this line