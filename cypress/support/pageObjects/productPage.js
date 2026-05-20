/// reference types="cypress" />
export class ProductPage {

    productPageElements = {
       addToCart: "#add-to-cart-sauce-labs-backpack",
       removefromCart: "#remove-sauce-labs-backpack",
       shoppingCart: "[data-test=\"shopping-cart-link\"]",
    }

    clickAddToCart() {
        cy.get(this.productPageElements.addToCart).click();
    }

    verifyRemoveFromCart() {
        cy.get(this.productPageElements.removeFromCart).should('be.visible');
    }

    existsShoppingCart() {
        cy.get(this.productPageElements.shoppingCart).should('be.visible');
    }
}