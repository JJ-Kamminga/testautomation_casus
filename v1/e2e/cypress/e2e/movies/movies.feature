Feature: movies

  Background:
    Given I am logged in
    And I visit the homepage

  Scenario: presence of basic elements
    Then I see the text "All Movies"
    And the list of movies contains at least 10 movies
    And each movie has a title and a description
    # This fails correctly
    # And each movie has an image

  Scenario: movie details
    Then I see the text "All Movies"
    And I click the button with the text "more..." on movie 1
    Then I see a filled "Title" field
    And I see a filled "Title" field
    And I see a filled "Title" field
    # This fails correctly
    # And I see the movie image

    And I click the button with the text "Show all movies"
    Then I see the text "All Movies"

    And I click the button with the text "more..." on movie 3
    Then I see a filled "Title" field
    And I see a filled "Title" field
    And I see a filled "Title" field
    And I see the movie image

  Scenario: movie search
    # lists max. 10 movies
    Then I see an input field with placeholder text "Search for a movie"
    And I search for "west"
    Then the list of movies contains exactly 10 movies
    # shows metadata
    And each movie has a title and a description

    # shows nothing when there are no results
    And I clear the input field
    And I search for "Pulp Fiction"
    Then I see the text "No search results!"

    # works case insensitive
    And I clear the input field
    And I search for "sTaR tRek"
    Then the list of movies contains at least 4 movies

    # results link to the movie pages
    And I click the button with the text "more..." on movie 1
    Then I see a filled "Title" field
    And I see a filled "Title" field
    And I see a filled "Title" field
    And I see the movie image