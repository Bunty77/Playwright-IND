// @ts-check
const { test, expect } = require('@playwright/test');
const { name } = require('../playwright.config');

test('has title', async ({ page }) => {
  
  
  await page.goto('https://order-qa.springer.com/public/test');

  await page.locator("//span[normalize-space()='Buy Handbuch Transitional Justice - Handbook']").click();
  await page.waitForTimeout(2000);

 // await page.locator("//div[contains(text(),'Continue browsing')]").click();

  await page.locator("//div[contains(text(),'Go to checkout')]").click();
  

  
  await page.locator("//input[@id='login-form-email']").fill('navnath.sujgure@springernature.com');
  await page.locator("//input[@id='login-form-password']").fill('Admin@12345');
  await page.locator("//form[@name='login-form']//button[@type='submit']").click();
  await page.waitForTimeout(3000);
  await page.locator("//span[contains(@class,'shell')]").click();
  await page.waitForTimeout(3000);
  await page.locator("//span[normalize-space()='Advance Invoice']").click();
  await page.locator("//aside[@class=' cell ']//span[@class=' shell '][normalize-space()='Buy now']").click();
await page.waitForTimeout(3000);
await page.close();
console.log("e");

});

