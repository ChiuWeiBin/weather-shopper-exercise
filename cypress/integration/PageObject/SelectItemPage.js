class SelectItemPage {
  getAllProductName() {
    return cy.get(".text-center.col-4 .font-weight-bold");
  }
  getAddToCartBtn() {
    return cy.get(".thin-text");
  }
}

export default SelectItemPage;
