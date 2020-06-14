///<reference types="Cypress"/>

import "@testing-library/cypress/add-commands";
import MoisturizersPage from "./PageObject/MoisturizersPage.spec";

describe("weather shopper", () => {
  it("it can open the website", () => {
    cy.visit("/moisturizer");
    cy.getminimumPrice("Aloe", "aloe");
    cy.getminimumPrice("Almond", "almond");
    //cy.get(".row .col-4 .btn").eq(2).click();
    //cy.get(".text-center.col-4 .font-weight-bold").eq(4).click();
    // const moisturizersPage = new MoisturizersPage();
    // var minPrice1 = 99999;
    // moisturizersPage.getAllProductName().each((el, index, list) => {
    //   const text = el.text();
    //   if (text.includes("Aloe") || text.includes("aloe")) {
    //     moisturizersPage
    //       .getAllProductName()
    //       .eq(index)
    //       .next()
    //       .then(($price) => {
    //         const priceInText = $price.text();
    //         const currentPrice = priceInText.replace(/\D/g, "");
    //         cy.log(currentPrice);

    //         if (currentPrice < minPrice1) {
    //           minPrice1 = currentPrice;
    //           //cy.log("minimum price  " + minPrice1);
    //         }
    //         //cy.log("minimum price 11 " + minPrice1);
    //         cy.contains(minPrice1).next().as("AloeMinPriceBtn");
    //         cy.contains(minPrice1).as("Price");

    //         // cy.contains(minPrice1).next().click();
    //       });
    //     //cy.log("minimum price 1111 " + minPrice1);
    //   }
    //});

    // to get the minimum price in text... converting
    // var minPrice1 = 99999;
    const moisturizersPage = new MoisturizersPage();
    // cy.get("@Price").then(($minPriceText) => {
    //   const minPriceText = $minPriceText.text().replace(/\D/g, "");
    //   cy.log("this is $minPriceText -> " + minPriceText);
    // });
    // moisturizersPage.getAllProductName().each((el, index, list) => {
    //   const text = el.text();
    //   if (text.includes("almond") || text.includes("Almond")) {
    //     moisturizersPage
    //       .getAllProductName()
    //       .eq(index)
    //       .next()
    //       .then(($price) => {
    //         const priceInText = $price.text();
    //         const currentPrice = priceInText.replace(/\D/g, "");
    //         //cy.log(currentPrice);

    //         if (currentPrice < minPrice1) {
    //           minPrice1 = currentPrice;
    //           //cy.log("minimum price  " + minPrice1);
    //         }
    //         //cy.log("minimum price 11 " + minPrice1);
    //         cy.contains(minPrice1).next().as("AlmondMinPriceBtn");
    //         // cy.contains(minPrice1).next().click();
    //       });
    //     //cy.log("minimum price 1111 " + minPrice1);
    //   }
    // });

    // cy.get("@AlmondMinPriceBtn").click();
    moisturizersPage.getAddToCartBtn().click();
  });
});

// cy.get(".text-center.col-4 .font-weight-bold").each(($el, index, $list) => {
//   const text = $el.text();
//   if (text.includes("Python")) {
//     cy.get("tr td:nth-child(2)")
//       .eq(index)
//       //next () is to get the dom of sibling
//       .next()
//       .then(($price) => {
//         const priceText = $price.text();

//         //expect --> chai keyword
//         expect(priceText).equal("25");
//       });
//   }
// });
