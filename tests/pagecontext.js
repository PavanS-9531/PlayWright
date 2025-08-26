import {test, expect, chromium} from '@playwright/test';

test("page context", async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const page2 = await context.newPage();

    await page.goto("https://mynta.com");
    

    await page.pause();
    await page2.goto("https://flipkart.com");
    await page2.pause();




}

)
//if we have to launch multiple pages, context fixture can be used to create a new page every time.
test("New Page Test", async ()=>{
    const browser = await chromium.launch();// usually we will not create it
    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.pause();
    await page.goto("https://www.amazon.in/");
    await page.getByRole('link', { name: 'Air conditioners' }).click();
    
    const page2promise= await page.waitForEvent('popup');
    const page2 = await page2promise;
    await page2.pause();



}

)

test("Actions test", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/'); 
    await page.getByRole('link',{name:'JavaScript Alerts'}).click();
    await page.pause();
    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    await page.pause();
    page.once('dialog',async dailog=>{
       await dailog.dismiss().catch(()=>{});
    });
    await page.pause()

   
})

test.only("Frames", async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames'); 
    await page.pause();
    let newstring = await page.frameLocator('[name="frame-top"]').frameLocator('[name="frame-left"]').locator
('body').allTextContents();
    console.log(newstring);
    await page.pause();
    await page.frameLocator('[name="frame-top"]').frameLocator('[frame-right]').locator('body').isVisible();
    




})