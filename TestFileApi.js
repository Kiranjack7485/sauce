import RestApi from "../New API/Requests.js";
import links from "../New API/requestURL.json" assert {type: "json"};
import chai from "chai";
import chaiHttp from "chai-http";
chai.use(chaiHttp);
var expect = chai.expect;


class ApiTest extends RestApi {
    getTest = async() => {
        return await this.getRequest(links.base_URL,links.end_points[0].get_request);
    }

    postTest = async() => {
        return await this.postRequest(links.base_URL,links.end_points[0].post_request);
        
    }

    putTest = async() => {
        return await this.putRequest(links.base_URL,links.end_points[0].put_request);
        
    }

    deleteTest = async() => {
        return await this.deleteRequest(links.base_URL,links.end_points[0].delete_request);
        
    }
}


let myTest = new ApiTest();
let getResponse = await myTest.getRequest();

console.log("The expected output is: ", getResponse);
// console.log("The asserted statement is: ",expect(getResponse).to.have.status(200));