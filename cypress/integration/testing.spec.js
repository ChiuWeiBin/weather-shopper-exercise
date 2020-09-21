///<reference types="Cypress"/>
///<reference types="cypress-iframe" />

import "@testing-library/cypress/add-commands";
import SelectItemPage from "./PageObject/SelectItemPage.spec";
import CheckoutPage from "./PageObject/CheckoutPage.spec";
import ConfirmationPage from "./PageObject/ConfirmationPage.spec";
var faker = require("faker");

describe("weather shopper", () => {
  it("it can open the website", () => {
    cy.visit("/moisturizer");
    cy.getminimumPriceFor("Aloe", "aloe");
    cy.getMinPriceInTxt();
    cy.get("@minPriceWithCurrency").as("minPrice1");

    cy.getminimumPriceFor("Almond", "almond");
    cy.getMinPriceInTxt();
    cy.get("@minPriceWithCurrency").as("minPrice2");

    const selectItemPage = new SelectItemPage();
    const checkoutPage = new CheckoutPage();

    // const checkoutPage = new CheckoutPage();
    selectItemPage.getAddToCartBtn().click();

    //cy.get("tbody > :nth-child(1) > :nth-child(2)").contains("@minPrice1");
    cy.get("@minPrice1").then((priceTxt) => {
      const $priceTxt = priceTxt.replace(/\D/g, "");
      checkoutPage.getFirstItemPrice().should("have.text", $priceTxt);
    });
    cy.get("@minPrice2").then((priceTxt) => {
      const $priceTxt = priceTxt.replace(/\D/g, "");
      checkoutPage.getSecondItemPrice().should("have.text", $priceTxt);
    });

    checkoutPage
      .getFirstItemPrice()
      .invoke("text")
      .then((price1) => {
        const Price1 = parseInt(price1);
        checkoutPage
          .getSecondItemPrice()
          .invoke("text")
          .then((price2) => {
            const Price2 = parseInt(price2);
            const total = Price1 + Price2;
            cy.wrap(total).as("total");
          });
      });

    checkoutPage
      .getTotalPrice()
      .invoke("text")
      .then((total) => {
        const totalString = parseInt(total.replace(/\D/g, ""));
        cy.get("@total").should("equal", totalString);
      });

    cy.findByText("Pay with Card")
      .click()
      .wait(1000); //iframe
    cy.frameLoaded(".stripe_checkout_app");
    cy.iframe()
      .find("[type='email']")
      .type(faker.internet.email()); //type random email from faker
    cy.iframe()
      .find("[placeholder='Card number']")
      .type("4242 4242 4242 4242"); //this is strip credit card test number
    cy.iframe()
      .find("[placeholder='MM / YY']")
      .type("0521");
    cy.iframe()
      .find("[placeholder='CVC']")
      .type(faker.random.number({ min: 100, max: 999 })); //generate 3 random numbers from faker
    cy.iframe()
      .find("[placeholder='ZIP Code']")
      .type(faker.address.zipCode()); // generate random zip code from jaker
    cy.iframe()
      .find("button")
      .click();

    const confirmationPage = new ConfirmationPage();
    confirmationPage.getTitle().should("be.visible");
    cy.url().should("include", Cypress.config().baseUrl + "confirmation"); //assert the correct URL
    confirmationPage.getTitle().should("include.text", "PAYMENT SUCCESS");
    confirmationPage
      .getMessage()
      .should(
        "include.text",
        "Your payment was successful. You should receive a follow-up call from our sales team."
      );
  });
});
