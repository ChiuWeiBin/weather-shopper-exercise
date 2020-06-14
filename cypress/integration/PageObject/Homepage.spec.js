// class Homepage {
//   getTemperature() {
//     return cy.get("#temperature");
//   }
//   getBuyMoisturizersBtn() {
//     return cy.get(".col-4 .btn-primary").eq(0);
//   }

//   getBuySunscreensBtn() {
//     return cy.get(".col-4 .btn-primary").eq(1);
//   }
// }

class Homepage {
  getBuyMoisturizersBtn() {
    return cy.get(".col-4 .btn-primary").eq(0);
  }

  getBuySunscreensBtn() {
    return cy.get(".col-4 .btn-primary").eq(1);
  }
  getAddToCartBtn() {
    return cy.get(".thin-text");
  }

  getTemperatureDOM() {
    return cy.get("#temperature");
  }
}

export default Homepage;
