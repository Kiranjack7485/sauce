
import fetch from 'node-fetch';
import bodyData2 from '../New API/bodydatajs.js'


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