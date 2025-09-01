import {test,expect,request} from "@playwright/test"
import * as fs from "fs"

test("Api Test", async()=>{
    let context = await request.newContext({
        baseURL:'https://reqres.in/',
        extraHTTPHeaders:{
            'content-type':'application/json',
            'x-api-key':'reqres-free-v1'
        }
    })

    let response = context.get('/api/users/1');
    let apiresponse= await response.json();
    expect(await response.status()).toBe(200);
    expect(await apiresponse.data.first_name).toBe('George');
})

