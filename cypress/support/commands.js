// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//import MoisturizersPage from "./PageObject/MoisturizersPage.spec";

import MoisturizersPage from "../integration/PageObject/MoisturizersPage.spec";

const moisturizersPage = new MoisturizersPage();

Cypress.Commands.add("getminimumPrice", (includesWord1, includesWord2) => {
  var minPrice1 = 99999;
  moisturizersPage.getAllProductName().each((el, index, list) => {
    const text = el.text();
    if (text.includes(includesWord1) || text.includes(includesWord2)) {
      moisturizersPage
        .getAllProductName()
        .eq(index)
        .next()
        .then(($price) => {
          const priceInText = $price.text();
          const currentPrice = priceInText.replace(/\D/g, "");
          //cy.log(currentPrice);

          if (currentPrice < minPrice1) {
            minPrice1 = currentPrice;
            //cy.log("minimum price  " + minPrice1);
          }
          //cy.log("minimum price 11 " + minPrice1);
          cy.contains(minPrice1).next().as("AloeMinPriceBtn");
          // cy.contains(minPrice1).next().click();
          cy.contains(minPrice1).as("Price");
        });
      //cy.log("minimum price 1111 " + minPrice1);
    }
  });
  cy.get("@AloeMinPriceBtn").click();
});

// -- This is a parent command --

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
