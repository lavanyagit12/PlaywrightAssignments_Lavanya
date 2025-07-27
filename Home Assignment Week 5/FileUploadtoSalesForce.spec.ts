import test, { chromium, expect } from "@playwright/test"

test("Create a new Account",async()=>{

const browser = await chromium.launch({channel:'chrome',headless:false})
const context = await browser.newContext()
const page = await context.newPage()    

await page.goto("https://login.salesforce.com")

//Enter username using getByLabel 
await page.getByLabel("Username").fill("udaya18udai318@agentforce.com")

// Enter password using getByLabel 
await page.getByLabel("Password").fill("Sales@123")

// Click Login 
await page.click("#Login")
await page.waitForTimeout(5000)

// Click App Launcher
await page.locator(".slds-icon-waffle").click()

// Click View All
await page.click('button:text("View All")')

// Enter Accounts in the App Launcher Search box 
await page.getByPlaceholder("Search apps or items...").click()
await page.getByPlaceholder("Search apps or items...").fill("Accounts")
await page.waitForTimeout(5000)

// Click Accounts
await page.locator("//mark[text()='Accounts']").click()

// Click New 
await page.locator("(//a[@class='forceActionLink'])[1]").click()
await page.waitForTimeout(5000)

// Enter Account name
await page.fill("input[name='Name']","Lavanya")
await page.waitForTimeout(5000)

//Select Warm from the Rating dropdown
await page.locator("//button[@aria-label='Rating']").click()
await page.getByRole('option',{name:'Warm'}).click()

//Select Prospect from the Type dropdown
await page.locator("//button[@aria-label='Type']").click()
await page.getByRole('option',{name:'Prospect'}).click()

//Select Public from the Ownership dropdown
await page.locator("//button[@aria-label='Ownership']").click()
await page.getByRole('option',{name:'Public'}).click()


//Select Banking from the Industry dropdown
await page.waitForSelector("//button[@aria-label='Industry']")
await page.locator("//button[@aria-label='Industry']").click()

await page.getByRole('option',{name:'Banking'}).click()

await page.locator("//button[@aria-label='Industry']").scrollIntoViewIfNeeded()

//Click Save
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(5000)

//Assert the Account created
// Verify the toast message displayed
const toastMessgae = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(toastMessgae)
expect(toastMessgae).toBe('Account "Lavanya" was created.')
console.log("toast message verified successfully")

//Upload files

await page.locator("input[name='fileInput']").setInputFiles("utils/LoginValue.json")
await page.waitForTimeout(5000) 

//Click Done and assert the uploaded file
await page.locator("//span[text()='Done']").click()
const fileName = page.locator('span[data-aura-class="uiOutputText"]').first()
const fileNameText = await fileName.innerText()
expect(fileNameText).toBe("LoginValue.json")

})