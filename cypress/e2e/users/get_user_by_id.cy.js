describe('GET /users/{id}', () => {
    it('should return 200 OK status for a specific user', () => {
        const userId = 1;
        const baseUrl = Cypress.config().baseUrl;
        cy.request(`${baseUrl}/users/${userId}`).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});