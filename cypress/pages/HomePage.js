class HomePage {
  
    visit() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    getMenuButton() {
        return cy.get('#open-navigation-menu-mobile');
    }
    
    getLogoutButton1() {
        return cy.get(':nth-child(9) > .css-bve2vl')
    }

    getLogoutButton2() {
        return cy.get(':nth-child(7) > .css-bve2vl')
    }
}



export default HomePage;