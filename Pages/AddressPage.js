const {expect} = require('@playwright/test');
const { page } = require('@playwright/test');

exports.AddressPage = class AddressPage
{
 constructor(page)
 {
    this.page=page;
    this.adressbutton =page.locator("//span[contains(@class,'shell')]");

 }



async ClickAddressButton()
{
    this.adressbutton.click();
}


}