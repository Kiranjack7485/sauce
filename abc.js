
import fetch from 'node-fetch';
// fetch(`https://gorest.co.in/public/v2/users`,{
  
//     method: "POST",
//     headers:{
//         'Content-Type': 'application/json',
//          'Authorization' :'Bearer 85048371cf80938ed2682d5abec25c90e0cdeb02d655d66fe2d622ea9869534a'
// },
// body: {"name":"Tenali Ramakrishna", 
// "gender":"male", 
// "email":`tenali.ramakrishna${Math.round(Math.random()*100)}@15ce.com`,
//  "status":"active"}
// }).then(function(res){
//    return res.json()

// }).then(function(aa){
//     console.log(aa)
// })

let api= async function(){
    return fetch("https://reqres.in/api/users")
}

api().then(function(res){
    return res.json()
}).then(function(res){
console.log(res.data[0])
})

let html= `
<div>
<h1>${user.id}</h1>
<h1>${user.email}</h1>
<h1>${user.first_name}</h1>
<h1>${user.last_name}</h1>
<img src=${user.avtar}
</div>`