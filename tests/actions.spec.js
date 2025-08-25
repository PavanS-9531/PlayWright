import {test, expect} from '@playwright/test';

test('click checkbox', async ({page})=>{
    
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByText("Reading").check();
    await page.pause();
    await page.getByText("Reading").uncheck();


}

)

test('hover action', async ({page})=>{
    
    await page.goto("http://uitestingplayground.com/mouseover");
    await page.locator("[title='Click me']").hover();
    await page.pause();
    


}
)


test('double click', async ({page})=>{
    
    await page.goto("https://demoqa.com/buttons");
    await page.locator("[id='doubleClickBtn']").dblclick();
    await page.pause();
    


}

)

test('right click', async({page})=>{

    await page.goto("https://demoqa.com/buttons");
    await page.locator("[id='rightClickBtn']").click({button:"right"});
    await page.pause();
}

)

test('press enter',async({page})=>{
    await page.goto("http://localhost:8888/");
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[type='password']").fill("admin");
    await page.locator("[id='submitButton']").press('Enter');
    await page.pause();
}

)

test('tab test',async({page})=>{
    await page.goto("http://localhost:8888/");
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[name='user_name']").press('Tab');
    await page.pause();

}

)

test('select all test',async({page})=>{
    await page.goto("http://localhost:8888/");
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[name='user_name']").press('Control+A');
    await page.pause();
    await page.locator("[name='user_name']").press('Control+C');
    await page.pause();

}

)

test('ArrowOperations', async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("[name='user_name']").fill("admin");
    await page.locator("[name='user_name']").press('ArrowDown');
    await page.pause();
    await page.locator("[name='user_name']").press('ArrowUp');
    await page.pause();
    await page.locator("[name='user_name']").press('ArrowDown');


}

)

test('KeyBoard Operations', async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("[name='user_name']").fill("admin");
    await page.keyboard.down('Shift');
    await page.pause();
    await page.keyboard.press('KeyA');
    await page.pause();
  }

)

test('Scroll Test', async({page})=>{
    await page.goto("https://www.myntra.com/");
    await page.pause();
    while(await page.getByRole('heading', { name: 'Shop By Category' }).isVisible()==false){
            page.keyboard.down('PageDown');
    }
    await page.pause();
    const labeltext = await page.getByRole('heading', { name: 'Shop By Category' }).innerText();
    console.log(labeltext);

}

)



