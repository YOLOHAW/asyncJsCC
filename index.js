// https://jsonplaceholder.typicode.com/todos
let getToDos=(resource,callback)=>{
    let request=new XMLHttpRequest();

request.addEventListener("readystatechange",function(){
    if(request.readyState==4 && request.status==200){
        //callback("data response","error response")
        let data=JSON.parse(request.responseText)
        callback(data,undefined)

    }else if(request.status==404) {
        //console.log("url link is not available");
        callback(undefined,"url link is unavailable")
    }
})

request.open("GET",resource);
request.send();

console.log("I am first");
}
getToDos("todos/peaky.json",(data,err)=>{
    if(data){
        console.log(data);
        getToDos("todos/dream.json",(data,err)=>{
            if(data){
                console.log(data);
                getToDos("todos/brandquotes.json",(data,err)=>{
                    if(data){
                        console.log(data);
                    }
                })
            }
        })
    }
    if(err){
        console.log(err);
    }
})