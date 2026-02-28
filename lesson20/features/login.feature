Feature: Login functionality
  As a user
  I want to login to the application
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Failed login with locked out user
    Given I am on the login page
    When I enter username "locked_out_user" and password "secret_sauce"
    And I click the login button
    Then I should see an error message