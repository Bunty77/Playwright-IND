const { test, expect } = require('@playwright/test');
const {  LoginPage  } = require('../Pages/LoginPage');
const { AddressPage } = require('../Pages/AddressPage');
const { PaymentPage } = require('../Pages/PaymentPage');




test('Login With Username And Password With Advance Invoice as Payment Method', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const addressPage = new AddressPage(page);
  const paymentPage = new PaymentPage(page);
  await loginPage.goto();
  await loginPage.AdvanceInvoiceBook();
  await loginPage.ClickCheckout();
  await loginPage.typeusername();
  await loginPage.typePassword();
  await loginPage.Clickloginbutton();
  await page.waitForTimeout(4000);
  await addressPage.ClickAddressButton();
  await page.waitForTimeout(4000);
  await paymentPage.AdvanceInvoiceRadio();
  await paymentPage.ClickBuynow();
  await page.waitForTimeout(4000);
  console.log("hello");
  
  
});