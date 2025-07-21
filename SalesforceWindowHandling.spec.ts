// Preconditions:
// - Use page fixture
// - Load the URL (https://login.salesforce.com/)
// - Enter the username and password

import test, { expect } from "@playwright/test";


 test("sales force Window Handling", async({context,page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("udaya18udai318@agentforce.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()

    //Click on the "Learn More” button under Mobile Publisher
    const[page1] = await Promise.all(
        [context.waitForEvent('page'),
         page.locator("//div[contains(@class,'headerTrigger ')]").last().click(),
         page.waitForTimeout(5000),
         page.locator("//a[@title='Setup']").click(),
         page.waitForTimeout(4000),
        ])

        await page1.bringToFront()
        await page1.waitForLoadState()
   
    const[page2]= await Promise.all(
        [context.waitForEvent('page'),
           page1.getByRole('button', { name: 'Learn More' }).click()
        ])          
        console.log("LearnMore clicked successfully")

    //Click the ‘Confirm’ button on the page
        await page2.bringToFront()
        await page2.waitForLoadState() 
        await page2.locator("//button[@onclick='goAhead()']").click()

    //Capture the title of the new window that opens
       let pageTitle:any
       const allPages = page1.context().pages()
       console.log(allPages.length)
       pageTitle= await page2.title()
       console.log(pageTitle)
      

    //Assert the title and url of the page
     expect(pageTitle).toContain("Service Cloud")
     let pageUrl = page2.url()
     console.log(pageUrl)
     expect(pageUrl).toBe("https://www.salesforce.com/service/cloud/")
    
})
