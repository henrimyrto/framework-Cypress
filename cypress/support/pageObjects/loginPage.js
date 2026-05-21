/// reference types="cypress" />

export class LoginPage {

    loginPageElements = {
        
        emailInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),

        /* emailInput: '#user-name',
        passwordInput: '#password',
        loginButton: '#login-button', */
    }

    enterEmail(email) {
       // cy.get(this.loginPageElements.emailInput).type(email);
        this.loginPageElements.emailInput().type(email);
    }   
    enterPassword(password) {
        // cy.get(this.loginPageElements.passwordInput).type(password);
        this.loginPageElements.passwordInput().type(password);
    }
    clickLoginButton() {
        // cy.get(this.loginPageElements.loginButton).click();
        this.loginPageElements.loginButton().click();   
    }

    errorMessageShouldBeVisible() {
        this.loginPageElements.errorMessage().should('be.visible');
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }
}

