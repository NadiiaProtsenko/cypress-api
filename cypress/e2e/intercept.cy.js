import profile from '../fixtures/profile.json'

describe('Intercept', () => {

    it('Interception', () => {
        cy.intercept('https://qauto.forstudy.space/api/auth/signin', profile);
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser1@gmail.com');
        cy.get('#signinPassword').type('ZSgeVQhuU3qkvlG');
        cy.contains('Login').click();
        cy.contains('Profile', { timeout: 10000 }).click({ force: true });
        cy.contains('Name: Polar Bear').should('be.visible', { force: true });
        cy.contains('Country: USA').should('be.visible', { force: true });
        cy.contains('Date of birth: 11.11.2011').should('be.visible', { force: true });
    });
});
