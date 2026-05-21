/// reference types="cypress" />
import { LoginPage } from "../../support/pageObjects/loginPage";

import { ProductPage } from "../../support/pageObjects/productPage";

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
})

describe('Login Tests', () => {

    let loginPage= new LoginPage();
    let productPage = new ProductPage();

    it('should login successfully with valid credentials', () => {
        loginPage.enterEmail('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();

        productPage.existsShoppingCart();
    })

     it('should not login successfully with invalid credentials', () => {
        loginPage.enterEmail('standard_user');
        loginPage.enterPassword('wrong_password');
        loginPage.clickLoginButton();
        loginPage.errorMessageShouldBeVisible();

        
    })
})
