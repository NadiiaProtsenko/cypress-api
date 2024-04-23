describe('GET /posts', () => {
    it('should have userId field in the first post', () => {
        cy.request('/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.have.property('userId');
        });
    });
});
