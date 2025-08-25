import { Login_Page } from "../../src/pages/login_page";
const test = base.extend({
  loginPage: async ({ page }, use) => { await use(new Login_Page(page)); },
  //loginpage is a object that has to be created for every page that is declared.
  //extend keyword will create new instance of login page
})

module.exports={test};