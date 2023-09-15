Feature: E2E Scenario Validation 
    
    Navigation 

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    Then Validate the form behaviour
    Then Select the shop page tab

    @Regression
    Scenario: Ecommerce Happy Path
    Given I open Ecommerce Page 
    Then Open the shop Page tab
    When I Add items to Cart 
    And Validate the total prices
    Then Select the country and verify alert text

