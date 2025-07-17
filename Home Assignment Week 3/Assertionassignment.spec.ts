
//assignment 1 - using auto retrying and non-retrying assertions
import test, { expect } from "@playwright/test"


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

    //Verify the company name, first name, last name and the status using Non retry assertion
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
    expect(status).toContain('Assigned')

    console.log("All values are verified successfully through Non retry assertions")

    //Get the page title
    console.log(" Page Title is : " + (await page.title()))

    //Verify the company name, first name, last name and the status using auto retry assertion 
    expect(await page.locator("#viewLead_companyName_sp").textContent()).toContain('Testleaf')
    expect(await page.locator("#viewLead_firstName_sp").textContent()).toBe('Lavanya')
    expect(await page.locator("#viewLead_lastName_sp").textContent()).toBe('Bala')
    expect(await page.locator("#viewLead_statusId_sp").textContent()).toBe('Assigned')

    console.log("All values are verified successfully through Auto retry assertions")

})