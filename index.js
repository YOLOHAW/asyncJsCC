// https://jsonplaceholder.typicode.com/todos
let getToDos=(resource)=>{
   
    return new Promise((resolve,reject)=>{
        let request=new XMLHttpRequest();

        request.addEventListener("readystatechange",function(){
            if(request.readyState==4 && request.status==200){
                let datas=JSON.parse(request.responseText)
                //callback(data,undefined)
                resolve(datas)
        
            }else if(request.status==404) {
                //callback(undefined,"url link is unavailable")
                reject("Something went wrong")
            }
        })
        
        request.open("GET",resource);
        request.send();
    })
}
// console.log(getToDos("haw.json"))
getToDos("todos/peaky.json")
.then((data)=>{
    console.log(data);
    // getToDos("todos/dream.json")
    // .then((data)=>{
    //     console.log(data);
    // })
    // .catch((err)=>{
    //     console.log(err.message);
    // })
    return getToDos("todos/dream.json")
})
.then((data)=>{
    console.log(data);
    return getToDos("todos/brandquotes.json")
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})
