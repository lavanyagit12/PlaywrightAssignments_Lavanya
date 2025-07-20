import test, { expect } from "@playwright/test";

test("Multiple window handle",async({page,context})=>{

    await page.goto("https://the-internet.herokuapp.com/windows")

    const [page1]= await Promise.all([
        context.waitForEvent('page'),
        await page.getByText('Click Here').click()
    ])

     const PageTitle = await page1.title()
     console.log(PageTitle)
     await page.waitForTimeout(10000)
     expect(PageTitle).toBe("New Window")
     await page1.close()
     await page.waitForTimeout(10000)

})