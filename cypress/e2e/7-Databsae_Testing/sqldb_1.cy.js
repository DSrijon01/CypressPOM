/// <reference types="Cypress" />

describe('My first Database Testing', function() 
{
 
    it('Database Interaction', () => {
        // Running SQL Query from DB to fetch data
        cy.sqlServer("select * from Persons").then(function(result)
        {
            console.log(result[0][1])
        })



})
 
 
})