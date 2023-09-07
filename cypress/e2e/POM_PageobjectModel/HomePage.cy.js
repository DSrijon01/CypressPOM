class HomePage
{
    getEditBox()
    {
       return cy.get(':nth-child(1) > .form-control')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGenderSelector()
    {
        return cy.get('select')
    }

    getRadioButtonStates()
    {
        return cy.wrap({})
        .then(() => {
          cy.get('#inlineRadio1').should('be.enabled');
          cy.get('#inlineRadio2').should('be.enabled');
          cy.get('#inlineRadio3').should('be.disabled');
        });
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }















}

export default HomePage;
