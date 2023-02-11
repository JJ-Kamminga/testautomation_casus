Feature: homepage
  Scenario: presence of basic elements
    When I visit the homepage
    Then I see the text "Movies"
    And I see the text "Coming soon"
    And I see a button with the text "List all movies"
    And I see a link with the text "Sign Up"
    And I see a link with the text "Login"
    And I see a YouTube video