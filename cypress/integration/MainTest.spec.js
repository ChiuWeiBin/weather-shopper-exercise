import "@testing-library/cypress/add-commands";
import Homepage from "./PageObject/Homepage.spec";

describe("weather shopper", () => {
  it("it can open the website", () => {
    const homepage = new Homepage();

    cy.visit("/");
    homepage.getTemperatureDOM().then(($text) => {
      const temperature = parseInt($text.text()); //to get the temperature in int.
      console.log(temperature);
      cy.log(temperature + "℃");
      if (temperature < 19) {
        homepage.getBuyMoisturizersBtn().click();
      } else if (temperature > 34) {
        homepage.getBuySunscreensBtn().click();
      } else {
        cy.log("No need to test");
      }
    });
  });
});
