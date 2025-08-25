import {locator} from '@playwright/test'

class Login_Page{

    constructor(page){
       this.username = this.page.locator('[name="user_name"]');
       this.password = this.page.locator('[name="user_password"]');
       this.submitbutton = this.page.locator('[id="submitButton"]');

    }

    async login1(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitbutton.click();
    }

    async launchURL(url){
        await this.page.goto(url);
    }
}

module.exports = {Login_Page};