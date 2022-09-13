import fetch from 'node-fetch';
import {} from 'dotenv/config';


let bodyData = {"name":"Tenali Ramakrishna", 
                "gender":"male", 
                "email":`tenali.ramakrishna${Math.round(Math.random()*100)}@15ce.com`,
                 "status":"active"}

export default class goRestApi {

    myRequest = async(url,data) => {
        try{
        let res = await fetch(
            url,
            {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                 'Authorization' :'Bearer 85048371cf80938ed2682d5abec25c90e0cdeb02d655d66fe2d622ea9869534a'
        },
           
            body: JSON.stringify(data)
        })

        if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
        let body = await res.json();
        let stCode =  res.status;
        return  [body,stCode];
        
    }
    catch (err){
        console.error(err);
    }
    
}

}
let myObj =  new goRestApi();
let response1 = myObj.myRequest(`https://gorest.co.in/public/v2/users`,bodyData);
console.log("Response from the server is:", await response1);

