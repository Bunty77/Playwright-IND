const { test, expect } = require('@playwright/test');
const {  LoginPage  } = require('../Pages/LoginPage');
const { AddressPage } = require('../Pages/AddressPage');
const { PaymentPage } = require('../Pages/PaymentPage');



test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.
    
    
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
  });


test('Login With Username And Password With Advance Invoice as Payment Method', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    const addressPage = new AddressPage(page);
    const paymentPage = new PaymentPage(page);
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
  console.log("Test Pass");
  
  
});


test('Login With Username And Password With Paypal as Payment Method', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    const addressPage = new AddressPage(page);
    const paymentPage = new PaymentPage(page);

    await loginPage.BookClick();
    await loginPage.ClickCheckout();
    await loginPage.typeusername();
    await loginPage.typePassword();
    await loginPage.Clickloginbutton();
    await page.waitForTimeout(4000);
    await addressPage.ClickAddressButton();
    await page.waitForTimeout(4000);
    await paymentPage.PaypalRadioClick();
    await paymentPage.TermsandConditionClick();
    await paymentPage.ClickBuynow();
    await paymentPage.clickPaypalButton();
    console.log("Test Pass");
    
    
  });


  test.afterEach(async ({ page }) => {
    
   // hook that is executed after each test.
    page.close();

  });