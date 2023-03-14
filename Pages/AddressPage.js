const {expect} = require('@playwright/test');
const { page } = require('@playwright/test');

exports.AddressPage = class AddressPage
{
 constructor(page)
 {
    this.page=page;
    this.adressbutton =page.locator("//span[contains(@class,'shell')]");

    this.firstname = page.locator("//input[@id='form-input_billing_firstName']");
    this.lastname =page.locator("//input[@id='form-input_billing_lastName']");
    this.streetname =page.locator("//input[@id='form-input_billing_street']");
    this.postalcode = page.locator("//input[@id='form-input_billing_postalCode']");
    this.city = page.locator("//input[@id='form-input_billing_city']");
    this.country = page.locator("//select[@id='form-input_billing_country']");
    this.countryphoneno = page.locator("//input[@id='form-input_billing_phone']");
 }

async FirstName()
{
    await this.firstname.fill('Navnath');
}


async LastName()
{
    await this.lastname.fill('Sujgure');
}

async StreetName()
{
    await this.streetname.fill('Flat No G-908, Atria Grande')
}

async PostalCode()
{
    await this.postalcode.fill('422401')
}


async City()
{
    await this.city.fill('Pune')
}

async Country()
{
    await this.country.click();
    await this.country.selectOption(["JP", "Japan"]);
    await this.country.click();
}

async CountryPhoneno()
{
    await this.countryphoneno.fill('9000000000');
}


async ClickAddressButton()
{
    this.adressbutton.click();
}


}