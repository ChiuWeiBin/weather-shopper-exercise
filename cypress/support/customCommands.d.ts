declare namespace Cypress {
    interface Chainable<Subject> {
        getminimumPriceFor(includesWord1?: boolean, includesWord2?: boolean): Chainable<any>
        getMinPriceInTxt(): Chainable<any>
  }
}