describe('DELETE /posts/{id}', () => {
    it('should delete a post', () => {
        const postId = 1;
        cy.request('DELETE', `/posts/${postId}`).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
