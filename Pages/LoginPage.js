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
}

async goto()
{
  await this.page.goto('https://order-qa.springer.com/public/test');
  
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
    await this.username.fill('navnath.sujgure@springernature.com');
}

async typePassword()
{
    await this.password.fill('Admin@12345') ;
}

async Clickloginbutton()
{
    await this.loginbutton.click();
}

}
