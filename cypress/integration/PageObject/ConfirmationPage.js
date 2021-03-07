class ConfirmationPage {
  getTitle() {
    return cy.get("h2");
  }

  getMessage() {
    return cy.get("p.text-justify");
  }
}

export default ConfirmationPage;
