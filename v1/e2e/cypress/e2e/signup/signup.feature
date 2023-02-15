Feature: signup

Background:
    Given I visit the homepage

  Scenario: client side validation
    When I click the link with the text "Sign Up"
    Then I see the text "Username"
    And I see the text "Password"
    And I see the text "Repeat Password"
    And the "Sign Up" button is disabled

    # username should be at least 4 characters
    And I type "123" into the username field
    Then the "Sign Up" button is disabled
    
    # password should be filled in both fields
    And I type "1" into the password field
    Then the "Sign Up" button is disabled
    And I type "1" into the repeat password field
    Then the "Sign Up" button is disabled

    And I clear the username field
    And I type "1234" into the username field
    Then the "Sign Up" button is not disabled

    # passwords should be equal length
    And I clear the password field
    Then the "Sign Up" button is disabled
    And I type "123" into the password field
    Then the "Sign Up" button is disabled

    And I clear the repeat password field
    And I type "123" into the repeat password field
    Then the "Sign Up" button is not disabled

Scenario: creating a new user
    When I click the link with the text "Sign Up"
    And I type "cypress mock" into the username field
    And I type "cypress mock" into the password field
    And I type "cypress mock" into the repeat password field
    And I submit a mock of the signup request
    Then I see the text "Successfull Created a user"
    And I see the text "cypress mock"