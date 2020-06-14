///<reference types="Cypress"/>

import "@testing-library/cypress/add-commands";
import SelectItemPage from "./PageObject/SelectItemPage.spec";

describe("weather shopper", () => {
  it("it can open the website", () => {
    cy.visit("/moisturizer");
    cy.getminimumPriceFor("Aloe", "aloe");
    cy.getminimumPriceFor("Almond", "almond");
    const selectItemPage = new SelectItemPage();
    selectItemPage.getAddToCartBtn().click();
  });
});
