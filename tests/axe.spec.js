const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1

test.describe('homepage', () => { // 2
 
    test('welcome to AXE TEST:', async ({ page }) => {
    await page.goto('https://link.springer.com'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    

    //console.log(accessibilityScanResults.violations);

   expect(accessibilityScanResults.violations).toEqual([]); // 5
  });


 
});