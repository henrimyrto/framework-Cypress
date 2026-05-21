/// reference types="cypress" />
export class ProductPage {

    productPageElements = {
       addToCart: () => cy.get('#add-to-cart-sauce-labs-backpack'),
       removefromCart: () => cy.get('#remove-sauce-labs-backpack'),
       shoppingCart: () => cy.get('[data-test="shopping-cart-link"]'),
       cartBadgeNumber: () => cy.get('.shopping_cart_badge'),
    }

    clickAddToCart() {
        this.productPageElements.addToCart().click();
    }

    verifyRemoveFromCart() {
        this.productPageElements.removefromCart().should('be.visible');
    }

    existsShoppingCart() {
        this.productPageElements.shoppingCart().should('be.visible');
    }

    verifyCartBadgeNumber(expectedNumber) {
        this.productPageElements.cartBadgeNumber().should('have.text', expectedNumber);
    }
}