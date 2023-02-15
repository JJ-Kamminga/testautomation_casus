Feature: homepage

  Scenario: presence of basic elements
    When I visit the homepage
    Then I see the text "Movies"
    And I see the text "Coming soon"
    And I see a button with the text "List all movies"
    And I see a link with the text "Sign Up"
    And I see a link with the text "Login"
    And I see a YouTube video

  Scenario: home button
    When I visit the homepage
    And I click the button with the text "List all movies"
    Then I see "movies" in the url
    And I see the text "All Movies"
    And I click the logo in the header
    Then I am on the homepage
    And I see the text "Coming soon"