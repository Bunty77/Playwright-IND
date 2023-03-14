const { test, expect } = require('@playwright/test');
const {  LoginPage  } = require('../Pages/LoginPage');
const { AddressPage } = require('../Pages/AddressPage');
const { PaymentPage } = require('../Pages/PaymentPage');




test('Login With Username And Password With Advance Invoice as Payment Method', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const addressPage = new AddressPage(page);
  const paymentPage = new PaymentPage(page);
  await loginPage.goto();
  await loginPage.clickcookiebanner();
  await loginPage.AdvanceInvoiceBook();
  await loginPage.ClickCheckout();
  await loginPage.ClickGuestRadioButton();
  await loginPage.EnterGuestEmailAddress();
  await loginPage.ContinueASGuest();
  await page.waitForTimeout(8000);
  await addressPage.FirstName();
  await addressPage.LastName();
  await addressPage.StreetName();
  await addressPage.PostalCode();
  await addressPage.City();
  await addressPage.Country();
  await addressPage.CountryPhoneno();
  await addressPage.ClickAddressButton();
  await page.waitForTimeout(12000);
  await paymentPage.PaypalRadioClick();
  await paymentPage.ClickBuynow();
  await paymentPage.clickPaypalButton();
  console.log("Test Pass");
  await page.waitForTimeout(4000);
});