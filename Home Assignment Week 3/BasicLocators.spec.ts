//Assignment 1

import test, { expect } from "@playwright/test";

test("Create Lead",async({page})=>{

    //Login to sales force
    await page.goto("https://login.salesforce.com")
    await page.fill("#username","udaya18udai318@agentforce.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForTimeout(4000)

    //Click on toggle menu button from the left corner
    await page.getByTitle('App Launcher').click()
    

    //Click view All and click Sales from App Launcher
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForTimeout(3000)
    await page.locator("//p[text()='Sales']").click()

    //Click on Leads tab
    await page.locator("a[title='Leads']").click()

    //Click on New button
    await page.locator("div[title='New']").click()

    //Select Salutation dropdown - non select tag
    await page.locator("//button[@name='salutation']").click()
    await page.locator("//span[@title='Mrs.']").click()

    //Enter the Last Name
    await page.getByPlaceholder('Last Name').fill("bala")

    //Enter the Company Name
    await page.locator("input[name='Company']").fill("TestLeaf")

    //Click Save and Verify Leads name created
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(5000)
    const confirmMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
    console.log(confirmMessage)

    let leadName:string|null
    leadName = await page.locator('lightning-formatted-name').textContent()

    expect(leadName).toBe('Mrs.  bala')
    console.log('Lead Created :' +leadName)
})

//Assignment 3
test("Create Individual",async({page})=>{

    //Login to sales force
    await page.goto("https://login.salesforce.com")
    await page.fill("#username","udaya18udai318@agentforce.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForTimeout(4000)

    //Click on toggle menu button from the left corner
    await page.getByTitle('App Launcher').click()
    

    //Click view All and click Individuals from App Launcher
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Individuals')
    await page.waitForTimeout(3000)
    await page.locator("//mark[text()='Individuals']").click()
    await page.waitForTimeout(3000)

    //Click on the Dropdown icon in the Individuals tab
    let drpDown = page.locator("(//one-app-nav-bar-menu-button[@Class='slds-dropdown-trigger slds-dropdown-trigger_click'])[14]")
    await drpDown.click()
    await page.waitForTimeout(5000)
    //Click on New Individual
    await page.locator("//span[text()='New Individual']").click()
     await page.waitForTimeout(3000)

    //Enter the Last Name
    await page.getByPlaceholder('Last Name').fill("bala")

    //Click save
    await page.locator("//span[text()='Save']").click()
    await page.waitForTimeout(5000)
    const toastMesssage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
    console.log(toastMesssage)

    //verify Individuals Name
    const individualName = await page.locator("//h1[.//div[text()='Individual']]//span[contains(@class,'uiOutputText')]").textContent()
    console.log('Individual Created :' +individualName)
    expect(individualName).toBe('bala')
    
})

//Assignment 4
test("Edit Individual",async({page})=>{

    //Login to sales force
    await page.goto("https://login.salesforce.com")
    await page.fill("#username","udaya18udai318@agentforce.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForTimeout(4000)

    //Click on toggle menu button from the left corner
    await page.getByTitle('App Launcher').click()
    

    //Click view All and click Individuals from App Launcher
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Individuals')
    await page.waitForTimeout(3000)
    await page.locator("//mark[text()='Individuals']").click()

    //Click on the Individuals tab
    await page.locator("//abbr[@title='Not added to nav bar']").click()

    //Search the Individuals last name sur
    await page.locator("//input[@name='Individual-search-input']").fill("sur")
    await page.locator("//input[@name='Individual-search-input']").click()   


    //Click on the Dropdown icon and Select Edit
   
    await page.locator("//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small']").first().click();
    await page.waitForTimeout(5000)
    await page.waitForLoadState('load', {timeout :45000})
    await page.locator("//div[@class='forceActionLink']").first().click()

    //Select Salutation as 'Mr'
    await page.locator("(//a[@class='select'])[1]").click()
    await page.locator("//a[@title='Mr.']").click()

    //Now enter the first name
    await page.getByPlaceholder("First Name").fill("lavanya")

    //Click on Save
    await page.locator("//span[text()='Save']").click()

    //Capture the toast message
    const toastMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
    console.log(toastMessage)

    //Verify the first name
    await page.locator("(//table//tbody//tr//th//a)[1]").click()
    let fullName:any
    fullName = await page.locator("//h1[.//div[text()='Individual']]//span[contains(@class,'uiOutputText')]").textContent()
    console.log(fullName)
    const splitName =fullName.trim().split(" ")
    console.log(splitName)
    const firstName = splitName[1]
    if (firstName === "lavanya"){
        console.log("First name verified successfully")
    }else{
        console.log("First name not found")
    }
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

    //Click Leads
    await page.locator("//a[contains(text(),'Leads')]").click()
    
    //Click Create Lead
    await page.locator("//a[contains(text(),'Create Lead')]").click()

    //Fill the Company Name
    await page.locator("(//input[@name='companyName'])[2]").fill("Testleaf")

    //Fill the First Name,Lastname
    await page.locator("(//input[@name='firstName'])[3]").fill("Lavanya")
    await page.locator("(//input[@name='lastName'])[3]").fill("Bala")

    //Click Create Lead button
    await page.locator("//input[@value='Create Lead']").click()
    console.log("Lead created successfully")

     //Click Edit
    await page.locator("//a[contains(text(),'Edit')]").click()

    //Edit Company name ,Edit Annual Revenue ,Edit Department ,Enter Description 
    await page.fill("#updateLeadForm_companyName","Virtusa")

    //Click Update
    await page.locator("//input[@value='Update']").click()
    console.log("Lead updated successfully")
})
