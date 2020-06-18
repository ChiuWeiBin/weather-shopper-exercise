class CheckoutPage {
  getFirstItemPrice() {
    return cy.get("tr:nth-child(1) td:nth-child(2)");
  }

  getSecondItemPrice() {
    return cy.get("tr:nth-child(2) td:nth-child(2)");
  }

  getTotalPrice() {
    return cy.get("#total");
  }
}

export default CheckoutPage;
