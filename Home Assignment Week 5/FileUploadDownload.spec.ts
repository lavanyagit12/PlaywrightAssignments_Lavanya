import test, { expect } from "@playwright/test";
import path from "path";


test("Automate without interacting with the Upload button",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('#file-upload').setInputFiles("C:/Users/hp user/Desktop/Playwright 1/utils/LoginValue.json")
    await page.locator('#file-upload').press('Tab') // Focus moves to submit button
    await page.keyboard.press('Enter')
    await page.waitForSelector('#uploaded-files')
    await expect(page.locator("#uploaded-files")).toHaveText("LoginValue.json")
    
    
    const fileupload = page.waitForEvent('filechooser')
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.click("div[id ='drag-drop-upload']")
    const fileUp = await fileupload
    await fileUp.setFiles("utils/file_example_JPG_100kB.jpg")
    await page.waitForTimeout(5000)
    const imgPreview = page.locator("//div[contains(@class, 'dz-preview') and contains(@class, 'dz-success') and //div[contains(@class, 'dz-success-mark')]]")
    await expect(imgPreview).toBeVisible()
})

test("Automate without interacting with the download button",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download")
    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('link',{name:'example.json'}).click()
    const download=await downloadPromise
    const fileName = download.suggestedFilename()
    await download.saveAs(`downloads/${fileName}`)
    console.log(fileName)
    expect(fileName).toBe('example.json')

})