// https://jsonplaceholder.typicode.com/todos/1

// console.log(1);
// console.log(2);

// setTimeout(()=>{
//     console.log("I am async");
// },2000)

// console.log(3);
// console.log(4);
let request=new XMLHttpRequest();

request.addEventListener("readystatechange",function(){
    // console.log(request,request.readyState);
    if(request.readyState==4 && request.status==200){
        //console.log(request.status);
        console.log(request.responseText);
    }else if(request.status==404) {
        console.log("url link is not available");
    }
})

request.open("GET","https://jsonplaceholder.typicode.com/todos");
request.send();

console.log("I am first");
