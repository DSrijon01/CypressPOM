beforeEach(()=> {
    // runs once before all tests in the block
    cy.fixture('profile').then(function(data)
    {
        this.data=data
    })
});