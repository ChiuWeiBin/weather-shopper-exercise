import "@testing-library/cypress/add-commands";
import Homepage from "./PageObject/Homepage.spec";
import SelectItemPage from "./PageObject/SelectItemPage.spec";

describe("weather shopper", () => {
  it("it can open the website", () => {
    const homepage = new Homepage();
    const selectItemPage = new SelectItemPage();

    cy.visit("/");
    homepage.getTemperatureDOM().then(($text) => {
      const temperature = parseInt($text.text()); //to get the temperature in int.
      console.log(temperature);
      cy.log(temperature + "℃");
      if (temperature < 19) {
        homepage.getBuyMoisturizersBtn().click();
        cy.getminimumPriceFor("Aloe", "aloe");
        cy.getminimumPriceFor("Almond", "almond");

        selectItemPage.getAddToCartBtn().click();
      } else if (temperature > 34) {
        homepage.getBuySunscreensBtn().click();
        cy.getminimumPriceFor("SPF-30", "spf-30");
        cy.getminimumPriceFor("SPF-50", "spf-50");
        selectItemPage.getAddToCartBtn().click();
      } else {
        cy.log("No need to test");
      }
    });
  });
});
