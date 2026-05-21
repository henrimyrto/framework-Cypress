/// reference types="cypress" />
import { LoginPage } from "../../support/pageObjects/loginPage";

import { ProductPage } from "../../support/pageObjects/productPage";

describe('Products Tests', () => {

    let loginPage= new LoginPage();
    let productPage = new ProductPage();

    it('should add product to cart successfully', () => {
        cy.visit("https://www.saucedemo.com/");
        loginPage.enterEmail('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();   

        productPage.clickAddToCart();
        productPage.verifyRemoveFromCart();
        productPage.verifyCartBadgeNumber('1');
    })
})
