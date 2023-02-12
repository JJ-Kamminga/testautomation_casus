Feature: login

  Background:
    Given I visit the homepage

  Scenario: invalid credentials
    When I click the link with the text "Login"
    Then I see the text "Username"
    And I see the text "Password"
    And I enter invalid credentials
    And I click the button with the text "Submit"
    Then I see the text "Login Failed"
    And I click the button with the text "Retry"
    Then I see the text "Username"
    And I see the text "Password"

  Scenario: valid credentials
    When I click the link with the text "Login"
    Then I see the text "Username"
    And I see the text "Password"
    And I enter valid credentials
    And I click the button with the text "Submit"
    Then I see "movies" in the url
    And I click the link with the text "Profile"
    Then I see the text "Profile settings of"
    And I see my username
