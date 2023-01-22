const { test, expect } = require('@playwright/test');
const {  LoginPage  } = require('../Pages/LoginPage');
const { AddressPage } = require('../Pages/AddressPage');
const { PaymentPage } = require('../Pages/PaymentPage');




test('Login With Username And Password With Credit Card As Payment Method', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const addressPage = new AddressPage(page);
  const paymentPage = new PaymentPage(page);
  await loginPage.goto();
  await loginPage.BookClick();
  await loginPage.ClickCheckout();
  await loginPage.typeusername();
  await loginPage.typePassword();
  await loginPage.Clickloginbutton();
  await page.waitForTimeout(4000);
  await addressPage.ClickAddressButton();
  await page.waitForTimeout(4000);
  await paymentPage.ClickCreditCardRadiobutton();
  await paymentPage.TermsandConditionClick();
  await page.waitForTimeout(2000);
  await paymentPage.ClickBuynow();
  await page.waitForTimeout(4000);
await paymentPage.entercardnumber();
  await paymentPage.CardholderName();
 await page.waitForTimeout(2000);
  await paymentPage.CardholderMonth();
  await paymentPage.CardholderYear();
  await paymentPage.SecurityCode();
  await paymentPage.SubmitButtoncc();
  await page.waitForTimeout(3000);
});