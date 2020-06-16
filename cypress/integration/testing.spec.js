///<reference types="Cypress"/>

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
  });
});
