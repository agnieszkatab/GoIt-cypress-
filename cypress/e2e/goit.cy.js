/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Login";


describe('test1', () => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()

    it('logging to LMS account', () => {

        loginPage.login('user888@gmail.com', '1234567890');
        homePage.getMenuButton().click()
        homePage.getLogoutButton1().click();
    })
})



describe('test2', () => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    

    it('logging to  second LMS account', () => {

        loginPage.login('testowyqa@qa.team', 'QA!automation-1');
        homePage.getMenuButton().click();
        homePage.getLogoutButton2().click();
    })
})

