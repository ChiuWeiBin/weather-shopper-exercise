///<reference types="Cypress"/>
///<reference types="cypress-iframe" />

import "@testing-library/cypress/add-commands";
import SelectItemPage from "./PageObject/SelectItemPage.spec";

describe("weather shopper", () => {
  it("it can open the website", () => {
    cy.visit("/moisturizer");
    cy.getminimumPriceFor("Aloe", "aloe");
    cy.getMinPriceInTxt();
    cy.get("@minPriceWithCurrency").as("minPrice1");
    cy.log("this is minPrice1 --> " + "@minPrice1");

    cy.getminimumPriceFor("Almond", "almond");
    cy.getMinPriceInTxt();
    cy.getMinPriceInTxt();
    cy.get("@minPriceWithCurrency").as("minPrice2");
    cy.log("@minPrice2");
    const selectItemPage = new SelectItemPage();
    selectItemPage.getAddToCartBtn().click();
    //cy.get("tbody > :nth-child(1) > :nth-child(2)").contains("@minPrice1");
    cy.get("@minPrice1").then((priceTxt) => {
      const $priceTxt = priceTxt.replace(/\D/g, "");
      cy.get("tr:nth-child(1) td:nth-child(2)").should("have.text", $priceTxt);
    });
    cy.get("@minPrice2").then((priceTxt) => {
      const $priceTxt = priceTxt.replace(/\D/g, "");
      cy.get("tr:nth-child(2) td:nth-child(2)").should("have.text", $priceTxt);
    });

    cy.get("tr:nth-child(1) td:nth-child(2)")
      .invoke("text")
      .then((price1) => {
        const Price1 = parseInt(price1);
        cy.get("tr:nth-child(2) td:nth-child(2)")
          .invoke("text")
          .then((price2) => {
            const Price2 = parseInt(price2);
            const total = Price1 + Price2;
            cy.wrap(total).as("total");
          });
      });

    cy.get("#total")
      .invoke("text")
      .then((total) => {
        const totalString = parseInt(total.replace(/\D/g, ""));
        cy.get("@total").should("equal", totalString);
      });

    cy.findByText("Pay with Card").click().wait(1000); //iframe
    cy.frameLoaded(".stripe_checkout_app");
    cy.iframe().find("[type='email']").type("gdsfjh@jdhjffdg.dfg");
    cy.iframe().find("[placeholder='Card number']").type("4242 4242 4242 4242");
    cy.iframe().find("[placeholder='MM / YY']").type("0521");
    cy.iframe().find("[placeholder='CVC']").type("123");
    cy.iframe().find("[placeholder='ZIP Code']").type("45646");
    cy.iframe().find("button").click();

    cy.wait(500);
    cy.get("h2").should("include.text", "PAYMENT SUCCESS");
    cy.get("p.text-justify").should(
      "include.text",
      "Your payment was successful. You should receive a follow-up call from our sales team."
    );
  });
});
