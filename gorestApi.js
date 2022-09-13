import fetch from 'node-fetch';
import {} from 'dotenv/config';
import links from "../New API/requestURL.json" assert {type: "json"};
import {bodyData2} from '../New API/bodydata12.js'



let bodyData = {"name":bodyData2[2].name, 
                "gender":bodyData2[2].gender, 
                "email":bodyData2[2].email,
                 "status":bodyData2[2].status}

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
let response1 = myObj.myRequest(`${links.base_URL1}${links.end_points1[0].gorest_post}`,bodyData);
console.log("Response from the server is:", await response1);

