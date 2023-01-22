const {expect} = require('@playwright/test');
const { page } = require('@playwright/test');

exports.PaymentPage = class PaymentPage
{


constructor(page)
{
    this.page=page;
    this.paypalradio = page.locator("//label[@for='input-payment-method-paypal']//div[contains(@class,'core')]");
    this.understandcheckbox = page.locator("//input[@id='consentCheck']");
    this.buynow = page.locator("//aside[@class=' cell ']//span[@class=' shell '][normalize-space()='Buy now']");
    this.paypal =page.locator("//input[@id='PMMakePayment']");

    // Credit Card 

    this.creditcardradio= page.locator("//span[normalize-space()='Debit/Credit Card']");
    this.cardnumber = page.frameLocator("//iframe[@id='wp-cl-paymentFormContainer-iframe']").locator("//input[@id='cardNumber']");
    this.cardholdername =page.frameLocator("//iframe[@id='wp-cl-paymentFormContainer-iframe']").locator("//input[@id='cardholderName']");
    this.cardholdermonth =page.frameLocator("//iframe[@id='wp-cl-paymentFormContainer-iframe']").locator("//input[@id='expiryMonth']");
    this.cardholderyear =page.frameLocator("//iframe[@id='wp-cl-paymentFormContainer-iframe']").locator("//input[@id='expiryYear']");
    this.securitycode=page.frameLocator("//iframe[@id='wp-cl-paymentFormContainer-iframe']").locator("//input[@id='securityCode']");
    this.ccsubmitbutton =page.frameLocator("//iframe[@id='wp-cl-paymentFormContainer-iframe']").locator("//input[@id='submitButton']");
    

}

async PaypalRadioClick()
{
    await this.paypalradio.click();
}

async TermsandConditionClick()
{
    await this.understandcheckbox.click();
}


async ClickBuynow()
{
    await this.buynow.click();
}

async clickPaypalButton()
{
   await this.paypal.click();
}


async ClickCreditCardRadiobutton()
{
    this.creditcardradio.click();
}

async entercardnumber()
{
   
    await this.cardnumber.fill('4444333322221111');
  
  
}


async CardholderName()
{
    await this.cardholdername.fill('Navnath Sujgure');
}


async CardholderMonth()
{
    await this.cardholdermonth.fill('5')
}

async CardholderYear()
{
    await this.cardholderyear.fill('25');
}



async SecurityCode()
{
    await this.securitycode.fill('123')
}



async SubmitButtoncc()
{
    await this.ccsubmitbutton.click();
}


}