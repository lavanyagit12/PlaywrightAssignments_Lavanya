// Your task is to launch two separate browser instances using Playwright:
// 1. Load Red Bus in an Edge browser instance and verify the page title and URL.
// 2. Load Flipkart in a Firefox browser instance and verify the page title and URL.

import { test, expect, chromium, firefox } from '@playwright/test';

test ('Red bus in Edge Browser',async () => {
    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    });
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    await edgePage.goto('https://www.redbus.in');

    const edgeTitle = await edgePage.title();
    const edgeURL = edgePage.url();
    console.log("Red Bus (Edge):");
    console.log("Title:", edgeTitle);
    console.log("URL:", edgeURL);
    await edgeBrowser.close();
})
    //firefox
    test('Flipkart in Firefox', async () => {
    const firefoxBrowser = await firefox.launch({ headless: false });
    const firefoxContext = await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();
    await firefoxPage.goto('https://www.flipkart.com');

    const firefoxTitle = await firefoxPage.title();
    const firefoxURL = firefoxPage.url();
    console.log("\nFlipkart (Firefox):");
    console.log("Title:", firefoxTitle);
    console.log("URL:", firefoxURL);

  
    await firefoxBrowser.close();
})
