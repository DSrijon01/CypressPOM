Feature: E2E Scenario Validation 
    
    Navigation 

    Scenario: Ecommerce Happy Path
    Given I open Ecommerce Page 
    When I Add items to Cart 
    And Validate the total prices
    Then Select the country and verify alert text


    # Scenario: Filling Form
    # Given I open Ecommerce Page
    # When I fill the form details
    # Then Validate the form behaviour 
    # And Select the shop page