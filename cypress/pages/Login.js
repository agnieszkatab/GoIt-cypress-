import HomePage from "../pages/HomePage";

class LoginPage {
    

    getEmailInput() {
        return cy.get('#user_email');
    }

    getPasswordInput() {
        return cy.get('#user_password');
    }

    getLoginButton() {
        return cy.get('.css-1jphuq5');
    }

  


    login(email, password) {
        const homePage = new HomePage()
        homePage.visit();
        this.getEmailInput().type(email);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
    }
}


export default LoginPage;
