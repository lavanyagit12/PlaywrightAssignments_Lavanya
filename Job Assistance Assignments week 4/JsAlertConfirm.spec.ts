// 1. JS Alert Confirmation (HerokuApp)
// Website: https://the-internet.herokuapp.com/javascript_alerts
// Question:
// A confirmation alert appears when clicking the "Click for JS Confirm" button.
// You need to dismiss the alert and verify that the result text is "You clicked: Cancel".
// How will you handle this using Playwright?
// How would your code react if the alert is not handled?
// How do you simulate both accept and cancel flows?

import test, { expect} from "@playwright/test";

test("Js Alert confirm",async({page})=>{

    page.once("dialog",jsAlert=>{

           console.log(jsAlert.type())
           jsAlert.message()
           jsAlert.dismiss()
        
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //Click on js confirm button
    await page.locator('//button[text()="Click for JS Confirm"]').click()
    await page.waitForTimeout(5000)
    //Getting text of the result and verifying it
    const result = await page.locator("#result").innerText()
    console.log(result)
    await page.waitForTimeout(5000)

    expect(result).toBe("You clicked: Cancel")
    
})




