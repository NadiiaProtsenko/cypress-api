import profile from '../fixtures/profile.json'

describe('Intercept', () => {

    it('Interception', () => {
        cy.intercept('https://qauto.forstudy.space/api/users/profile', profile);
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
        cy.get('.profile_name').should('contain', 'Polar Bear');
        cy.get('.profile-info_text').eq(0).should('contain', '11.11.2011');
        cy.get('.profile-info_text').eq(1).should('contain', 'USA');
    });
});
