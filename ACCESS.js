const puppeteer = require('puppeteer');

async function checkImageAccessibility() {
    const browser = await puppeteer.launch({headless : "new"});
    const page = await browser.newPage();

    // Navigate to a blank page
    await page.goto('about:blank');

    // Use page.evaluate() to check image accessibility
    const isImageAccessible = await page.evaluate(() => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = 'img.jgp.jpeg'; // Replace with the actual image URL or path
        });
    });

    console.log('Image is accessible:', isImageAccessible);

    await browser.close();
}

checkImageAccessibility();
