describe('POST /posts', () => {
    it('should create a new post', () => {
        const newPost = {
            title: 'New Post Title',
            body: 'New Post Body',
            userId: 1
        };

        cy.request('POST', '/posts', newPost).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.title).to.eq(newPost.title);
        });
    });
});
