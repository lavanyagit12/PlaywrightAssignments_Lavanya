//Assignment 1

import test, { expect } from "@playwright/test";


test("Create Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter the username as ‘Demosalesmanager’
    await page.fill("#username","Demosalesmanager")

    //Enter the password as ‘crmsfa’
    await page.fill("#password","crmsfa")

    //Click the Login button
    await page.locator("//input[@class='decorativeSubmit']").click()

    //Click CRM/SFA
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    //Click Leads
    await page.locator("//a[contains(text(),'Leads')]").click()
    
    //Click Create Lead
    await page.locator("//a[contains(text(),'Create Lead')]").click()

    //Fill the Company Name
    await page.locator("(//input[@name='companyName'])[2]").fill("Testleaf")

    //Fill the First Name,Lastname,Salutation
    await page.locator("(//input[@name='firstName'])[3]").fill("Lavanya")
    await page.locator("(//input[@name='lastName'])[3]").fill("Bala")
    await page.locator("//input[@name='personalTitle']").fill("Mrs")

    //Fill the Title
    await page.locator("//input[@name='generalProfTitle']").fill("Software Tester")

    //Fill the Annual Revenue, Department and Phone number
    await page.locator("//input[@name='annualRevenue']").fill("20000")
    await page.locator("//input[@name='departmentName']").fill("Delivery")
    await page.locator("(//input[@name='primaryPhoneNumber'])[4]").fill("45456567")

    //Click Create Lead button
    await page.locator("//input[@value='Create Lead']").click()
    console.log("Lead created successfully")

    //Verify the company name, first name, last name and the status
    const companyName = await page.locator("#viewLead_companyName_sp").textContent()
    console.log("Company Name:" + companyName)
    const firstName = await page.locator("#viewLead_firstName_sp").textContent()
    console.log("First Name:" + firstName)
    const lastName = await page.locator("#viewLead_lastName_sp").textContent()
    console.log("Last Name:" + lastName)        
    const status = await page.locator("#viewLead_statusId_sp").textContent()
    console.log("status:" + status)

    //Validate using Assertions
    expect(companyName).toContain('Testleaf')
    expect(firstName).toContain('Lavanya')
    expect(lastName).toContain('Bala')
    expect(status).toContain("Assigned")

    console.log("All values are verified successfully")

    //Get the page title
    console.log(" Page Title is : " + (await page.title()))

})

//Assignment 2

test("Edit Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter the username as ‘Demosalesmanager’
    await page.fill("#username","Demosalesmanager")

    //Enter the password as ‘crmsfa’
    await page.fill("#password","crmsfa")

    //Click the Login button
    await page.locator("//input[@class='decorativeSubmit']").click()

    //Click CRM/SFA
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    //click Leads
    await page.locator("//a[contains(text(),'Leads')]").click()

    //Click Find Leads
    await page.locator("//a[contains(text(),'Find Leads')]").click()

    //Enter the first name
    await page.locator("(//input[@name='firstName'])[3]").fill("Lavanya")

    //Click Find Leads button
    await page.locator("//button[contains(text(),'Find Leads')]").click()

    //Click the first resulting Lead ID
    await page.locator("(//table[contains(@class, 'x-grid3-row-table')]//a[contains(@href, 'viewLead?partyId=')])[1]").click()

    //Click Edit
    await page.locator("//a[contains(text(),'Edit')]").click()

    //Edit Company name ,Edit Annual Revenue ,Edit Department ,Enter Description 
    await page.fill("#updateLeadForm_companyName","Virtusa")
    await page.fill("#updateLeadForm_firstName","lav")
    await page.fill("#updateLeadForm_lastName","bal")
    await page.fill("#updateLeadForm_description","test")

    //Click Update
    await page.locator("//input[@value='Update']").click()

    //Verify the edited fields and print the title of the page

    //Verify the company name, first name, last name and the status
    const companyName = await page.locator("#viewLead_companyName_sp").textContent()
    console.log("Company Name:" + companyName)
    const firstName = await page.locator("#viewLead_firstName_sp").textContent()
    console.log("First Name:" + firstName)
    const lastName = await page.locator("#viewLead_lastName_sp").textContent()
    console.log("Last Name:" + lastName)        
    const description = await page.locator("#viewLead_description_sp").textContent()
    console.log("description:" + description)

    //Vlaidate using Assertions
    expect(companyName).toContain('Virtusa')
    expect(firstName).toContain('lav')
    expect(lastName).toContain('bal')
    expect(description).toContain("test")

    console.log("All values are updated successfully")

    //Get the page title
    console.log(" Page Title is : " + (await page.title()))

})

//Assignment 3

test.only("Create a new Account",async({page})=>{

//Navigate to the url https://login.salesforce.com/ 
await page.goto("https://login.salesforce.com")

//Enter username using getByLabel 
await page.getByLabel("Username").fill("udaya18udai318@agentforce.com")

// Enter password using getByLabel 
await page.getByLabel("Password").fill("Sales@123")

// Click Login 
await page.click("#Login")
await page.waitForTimeout(5000)

// Verify the title and url of the page using appropriate assertions 
await expect(page).toHaveTitle('Home | Salesforce')
console.log(await page.title())

await expect(page).toHaveURL("https://orgfarm-4dc2e8d12d-dev-ed.develop.lightning.force.com/lightning/page/home")
console.log(page.url())

// Click App Launcher using the class locator 
await page.locator(".slds-icon-waffle").click()

// Click View All using getByText 
await page.click('button:text("View All")')

// Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
await page.getByPlaceholder("Search apps or items...").click()
await page.getByPlaceholder("Search apps or items...").fill("Service")

// Click Service using index based XPath
await page.locator("(//mark[text()='Service'])[1]").click()

// Click Accounts using attribute based CSS selector 
await page.locator("a[title='Accounts']").click()

// Click New using getByRole 
await page.getByRole('link',{name:'New'}).click()
await page.waitForTimeout(5000)

// Enter Account name using attribute based CSS selector
await page.fill("input[name='Name']","Lavanya")
await page.waitForTimeout(5000)

//Click Save button using XPath 
await page.locator("//button[@name='SaveEdit']").click()

// Verify the toast message displayed
const toastMessgae = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
console.log(toastMessgae)
expect(toastMessgae).toBe('Account "Lavanya" was created.')
console.log("toast message verified successfully")

})