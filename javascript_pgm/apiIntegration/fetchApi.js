
//Accessing data from api using fetch(use fake store API )
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error in getting data");
})
