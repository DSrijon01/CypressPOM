/// <reference types="cypress" />

context('Waiting', () => {
  let data
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/waiting')
    // Connect to the database
    cy.sqlServer("select * from Persons").then(function(result)
        {
            data = result
        })
  })
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  it('cy.wait() - wait for a specific amount of time', () => {

    // Fetch Data from DB
    cy.get('.wait-input1').type(data[0][2])
    cy.wait(1000)
    cy.get('.wait-input2').type(data[1][2])
    cy.wait(1000)
    cy.get('.wait-input3').type('Wait 1000ms after typing')
    cy.wait(1000)
  })

  it('cy.wait() - wait for a specific route', () => {

    // Listen to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // wait for GET comments/1
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
  })
})
