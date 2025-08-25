import {test, expect} from '@playwright/test'

test('Assertions', async({page})=>{
    // await expect(locator).assertion
    await page.goto("http://localhost:8888/");
   // await page.waitForTimeout(12000);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator("[name='user_name']")).toBeEditable();
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[name='user_password']").fill("admin");
    await page.waitForSelector("input[id='submitButton']");
   // await expect(page.locator("input[id='submitButton']")).toBeEnabled();
    await page.locator("input[id='submitButton']").click();
    
    

}

)

