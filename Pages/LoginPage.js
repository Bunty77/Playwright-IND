const {expect} = require('@playwright/test');
const { page } = require('@playwright/test');

exports.LoginPage = class LoginPage{


constructor(page)
{
    this.page =page;
    this.username = page.locator("//input[@id='login-form-email']");
    this.password = page.locator("//input[@id='login-form-password']");
    this.book = page.locator("//span[normalize-space()='Buy Füchse zähmen - Bundle SoftCover + Ebook']");
    this.checkout = page.locator("//div[contains(text(),'Go to checkout')]");
    this.loginbutton =page.locator("//form[@name='login-form']//button[@type='submit']");
    this.advanceinvoicebook = page.locator("//span[normalize-space()='Buy Handbuch Transitional Justice - Handbook']");
    this.cookiebanner = page.locator("//button[@class='cc-button cc-button--contrast cc-banner__button cc-banner__button-accept']");
    this.selectguestradiobutton =page.locator("//h2[@id='proceed-as-guest']");
    this.guestemail = page.locator("//input[@id='guest-form-email']");
    this.continueasguest = page.locator("//span[normalize-space()='Continue as guest']");
    this.countryphoneno = page.locator("//input[@id='form-input_billing_phone']");
    

}

async goto()
{
  await this.page.goto('https://order-qa.springer.com/public/test');
  
}
async clickcookiebanner()
{
    await this.cookiebanner.click();
}

async ClickGuestRadioButton()
{
    await this.selectguestradiobutton.click();
}

async EnterGuestEmailAddress()
{
    await this.guestemail.fill('navnath.sujgure@ymail.com');
}

async ContinueASGuest()
{
    await this.continueasguest.click();
}

async CountryPhoneno()
{
    await this.countryphoneno.fill('9000000000');
}

async BookClick()
{
    await this.book.click();
}


async ClickCheckout()
{
    await this.checkout.click();
}

async typeusername()
{
    await this.username.fill('navnathtest1999@gmail.com');
}

async typePassword()
{
    await this.password.fill('Admin@12345') ;
}

async Clickloginbutton()
{
    await this.loginbutton.click();


}

async AdvanceInvoiceBook()
{
    await this.advanceinvoicebook.click();
}

}
