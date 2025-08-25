import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixtures";

const {When,Then,Given,And} = createBdd(test);
//This is like creating a test block
Given("launch the URL",async({loginPage})=>{
    
    await loginPage.launchURL("http://localhost:8888/");
})// we are passing custom fixture which was created in fixtures.js

When("enter username and password",async({loginPage})=>{
     await loginPage.login1("admin","admin");
})