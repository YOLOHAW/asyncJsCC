fetch("todos/peaky.json")
.then((response)=>{
    // console.log("resolved",response);
    if(response.status==404){
        throw new Error("url link is unavailable")
    }
    return response.json();
})
.then((data)=>{
    console.log(data);
    fetch("todos/brandquotes.json")
    .then((response)=>{
        //can write if 404 checking
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.log(err.message);
})