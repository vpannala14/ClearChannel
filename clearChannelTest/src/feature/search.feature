Feature: Ssearching
  I want to be able to search the website
  So that I can find the information I am looking for

  Scenario Outline: Search
    Given https://www.clearchannelinternational.com/
    When I go the the header
    And I click on the icon on the right which will let me search
    And I enter test
    And I click the search button on the right of the search field
    And the search executes



    #  Below is what I expect the Feature file should be as per my Review ------------------------------------------




Feature: Search
  I want to be able to search the website
  So that I can find the information I am looking for

  Scenario: Verifying Search functionality
    Given I am on the HomePage
    When I search the phrase 'test'
    Then I should see results for test