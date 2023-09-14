Feature: E2E Scenario Validation 
    
    Navigation 

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    Then validate the forms behaviour
    And select the Shop Page

    @Regression
    Scenario: Ecommerce Happy Path
    Given I open Ecommerce Page 
    When I Add items to Cart 
    And Validate the total prices
    Then Select the country and verify alert text

