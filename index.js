// fetch("todos/peaky.json")
// .then((response)=>{
//     // console.log("resolved",response);
//     if(response.status==404){
//         throw new Error("url link is unavailable")
//     }
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
//     fetch("todos/brandquotes.json")
//     .then((response)=>{
//         //can write if 404 checking
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// })
// .catch((err)=>{
//     console.log(err.message);
// })
let getJson=async ()=>{
    let response=await fetch("todos/peakys.json")
    if(response.status==404){
        throw new Error("Api Link is unavailable")
    }
    let datatway=response.json()
    return datatway
}
//console.log(getJson());
getJson()
.then((datas)=>{
    console.log(datas);
})
.catch((err)=>{
    console.log(err.message);
})
//Promise Gave resolve and reject
//Fetch Gave only resolve