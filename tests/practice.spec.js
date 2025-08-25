import {test, expect} from '@playwright/test';

test("vtiger", async ({ page }) =>{
    page.setDefaultTimeout();
    
    await page.goto("http://localhost:8888/");
    page.pause();
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[name='user_password']").fill("admin");
    page.pause();
    await page.locator('[id="submitButton"]').isEnabled();
    await page.locator('[id="submitButton"]').click();
    //await page.locator('//a[contains(text(),"Organizations")]').isVisible();
    await page.getByRole('link').filter({hasText:'Organizations'}).nth(0).isVisible();
    await page.getByRole('link').filter({hasText:'Products'}).click();
    await page.locator("[alt='Create Product...']").click();
    await page.locator("[name='productname']").fill("TestProd");
    await page.locator("[name='productcategory']").selectOption("Hardware");
    await page.locator("[id='my_file_element']").setInputFiles("D:/Personal/PlayWrightTraining/SHISHIR.HTML");//file upload
    
    await page.locator("[name='tax1_check']").click();
    await page.pause();
    await page.getByRole('button',{name: 'Cancel'}).first().click();
    
   // await page.locator('//img[@src="themes/softed/images/user.PNG"]').click();
    
    //await page.getByRole('link', { name: 'Sign Out' }).click();

});

test('Create Product',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[name='user_password']").fill("admin");
    await page.locator("[id='submitButton']").click();
    await page.getByRole("link").filter({hasText:'Products'}).click();
    await page.locator("[title='Create Product...']").click();
    page.pause();
    await page.locator("[name='manufacturer']").selectOption("AltvetPet Inc.");
    let class1 = await page.locator("[title='Save [Alt+S]']").getAttribute('class');
    console.log(class1);
    await page.getByRole()
    
    

})