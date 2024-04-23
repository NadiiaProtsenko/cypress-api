describe('GET /posts', () => {
    it('should return 200 OK status', () => {
        cy.request('/posts').then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
