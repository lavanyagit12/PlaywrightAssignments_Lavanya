// Task 1
// Steps :
// 1. Go to https://login.salesforce.com/?locale=in 
// 2. And login using credentials. [username : ravindran.ramdas@testleaf.com, password : RaviSalesTest]
// 3. Click on the "+" icon (6th icon from top right corner)
// 4. Choose and click "New Task" from dropdown.
// 5. Now get the xpath for "Subject" label web element.

import test from "@playwright/test"

test("SalesForce", async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("udaya18udai318@agentforce.com")
await page.locator("#password").fill("Sales@123")
await page.locator("#Login").click()
await page.waitForTimeout(6000)
await page.locator('(//*[@class="slds-icon slds-icon_x-small"])[1]').click()
await page.locator("//span[text()='New Task']/ancestor::a").click()
await page.locator("//input[@class='slds-combobox__input slds-input']/preceding::label[text()='Subject']").click()
})

//Task 2
// Steps :
// 1. Go to "http://leaftaps.com/opentaps/control/login" and login.
// 2. Click CRM/SFA .
// 3. Click "Leads" select the first lead from the list of leads

test("Leaftap", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("#label").click()
    await page.waitForTimeout(3000)
    await page.getByRole("link", {name:'Leads'}).click()
    await page.locator('(//*[@class="x-grid3-viewport"]//*[@class="linktext"])[1]').click()
    await page.waitForTimeout(2000)  
})

//Task3
// -> Go to mynthra.com choose "MEN" from the tab available.
// -> Select the check box of "Roadster" under the brands

test("Myntra", async({page})=>{

    await page.goto("https://www.myntra.com")
    await page.waitForTimeout(5000)  
    await page.locator("//a[@class='desktop-main' and contains(text(), 'Men')]").click()
    await page.waitForTimeout(5000)  
    const checkbox = page.locator("//label[contains(., 'Roadster')]/input")
    await checkbox.click()
    const isChecked = await checkbox.isChecked();
    console.log('Checkbox selected:', isChecked);
   
})
