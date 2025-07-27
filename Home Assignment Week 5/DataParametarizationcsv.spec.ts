import test from "@playwright/test"
import { parse } from 'csv-parse/sync'
import path from "path"
import fs from 'fs'

const values = parse(fs.readFileSync(path.join(__dirname, "../../utils/LeadValues.csv")),
                  {columns:true, skip_empty_lines:true,trim:true}) as any

for (let leadValue1 of values){

test(`leaftap using csv ${leadValue1.TestId}`,async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",leadValue1.UserName)
        await page.fill("#password",leadValue1.Password)
        await page.click(".decorativeSubmit")
        await page.locator("//a[contains(text(),'CRM/SFA')]").click()
        await page.locator("//a[contains(text(),'Leads')]").click()
        await page.locator("//a[contains(text(),'Create Lead')]").click()
        await page.fill("#createLeadForm_companyName",leadValue1.CompanyName)
        await page.fill("#createLeadForm_firstName",leadValue1.FirstName)
        await page.fill("#createLeadForm_lastName",leadValue1.LastName)

        //Select Direct Mail from the Source dropdown using label
        await page.selectOption("#createLeadForm_dataSourceId",{value:leadValue1.Source})

        //Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
        await page.selectOption("#createLeadForm_marketingCampaignId",{value:leadValue1.MarketingCampaign})

        //Get the count and print all the values in the Marketing Campaign dropdown  
        const marketCampaignValue = page.locator("#createLeadForm_marketingCampaignId")
        const marketCampaignOptions = marketCampaignValue.locator('option')
        const marketCampaignCount = await marketCampaignOptions.count()
        console.log(`Number of options in Market Compaign dropdown is  ${marketCampaignCount}`)
        for(let i=0;i<marketCampaignCount;i++){
        const marketDropDownValues = await marketCampaignOptions.nth(i).innerText()
        console.log( marketDropDownValues + "\n" )
        }

        //Select General Services from the Industry dropdown using index
        await page.selectOption("#createLeadForm_industryEnumId",{value:leadValue1.Industry})

        //Select INR from the Preferred Currency dropdown
        await page.selectOption("#createLeadForm_currencyUomId",{value:leadValue1.PreferredCurrency})

        //Select India from the Country dropdown
        await page.selectOption("#createLeadForm_generalCountryGeoId",{value:leadValue1.Country})

        //Select any state from the State dropdown
        await page.selectOption("#createLeadForm_generalStateProvinceGeoId",{value:leadValue1.State})

        //Get the count of all states and print the values in the console
        const stateValue = page.locator("#createLeadForm_generalStateProvinceGeoId")
        const stateOptions = stateValue.locator('option')
        const stateCount = await stateOptions.count()
        console.log(`Number of options in state dropdown is  ${stateCount}`)
        for(let i=0;i<stateCount;i++){
        const stateDropDownValues = await stateOptions.nth(i).innerText()
        console.log(stateDropDownValues + "\n")
        }   
        
        //Click Create Lead
        await page.click('.smallSubmit')
    
    })


}