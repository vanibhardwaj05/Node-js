//2nd way of doing it its tc is good compare to 1st prgram
let x=2;
let y=3;
let result=x+y;
fetch('https://jsonplaceholder.typicode.com/todos')
.then((data)=>data.json())//convert to json
.then((jsonData)=>console.log(jsonData))//log json
.catch((error)=>console.log(error));
console.log(result);