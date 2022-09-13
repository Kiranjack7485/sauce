import fetch from 'node-fetch';
import {} from 'dotenv/config';
import links from "../New API/requestURL.json" assert {type: "json"};

//  const requesData = (process.env.REQUES_EMAIL, process.env.REQUES_PASSWORD)

    // console.log("Data is: ", requesData);

export default class RestApi {

    myRequest = async(baseURL,endPoint) => {
        try{
        let res = await fetch(
            `${baseURL}${endPoint}`,
            {
            method: "POST",
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
           
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
        let body = await res.json();
        return await body;
    
    }
    catch (err){
        console.error(err);
    }
    
}

}
let base123 = links.base_URL
let endP = links.end_points[0].post_request
    let reqObj =  new RestApi();
    let response = await reqObj.myRequest(base123,endP);
    console.log("The response from the server is:", response);
