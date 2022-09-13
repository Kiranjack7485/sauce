import fetch from 'node-fetch';
import {} from 'dotenv/config';

const envData = (process.env.ID, 
                 process.env.EMAIL,
                 process.env.FIRST_NAME,
                 process.env.LAST_NAME)



export default class RestApi {

    getRequest = async (baseURL,endPoint)=>{
        let res = await fetch(`${baseURL}${endPoint}`);
        let body = await res.json();
        let responseTime = res.status;
        return await body;
        
        }
        

    postRequest = async(baseURL,endPoint) => {
        let res = await fetch(`${baseURL}${endPoint}`,{
            method: "POST",
            headers: {
                "token": "QpwL5tke4Pnpja7X4",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requesData)
        })
        let body = await res.json();
        let resTime = res.status;
        return await body,resTime;
        }

    putRequest = async(baseURL,endPoint) => {
        let res = await fetch(`${baseURL}${endPoint}`,{
            method: "PUT",
            headers: {
                    'Content-Type': 'application/json',
                     },
            body: JSON.stringify(envData)
            })
            let body = await res.json();
            return await body;
        }

    deleteRequest = async(baseURL,endPoint) => {
            let res = await fetch(
                `${baseURL}${endPoint}`,
                {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (res.ok) { console.log("HTTP request successful") }
                else { console.log("HTTP request unsuccessful") }
            let body = await res.json();
            return await body;
        }

    }
