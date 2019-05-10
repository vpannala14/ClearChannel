
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



 #####  Below is what I expect the Feature file should be as per my Review ------------------------------------------


>>The above Feature is written using Imperative style, spelling out with as much detail as necessary in accomplishing the task.

>>It’s always good to write Declarative features. We can only specify what needs to be accomplished. See below -  


Feature: Search
  I want to be able to search the website
  So that I can find the information I am looking for

  Scenario: Verifying Search functionality
    Given I am on the HomePage
    When I search the phrase 'test'
    Then I should see results for test

This is all information business really cares about and is easier to read.
Our Tests should largely focus on what needs to be accomplished, not the details of how it is done. They should mostly be understandable when read by non-developers/non-technical people.


Few other Issues:

>> Spelling Mistake in the Feature name. (Expected Searching, Actual - Ssearching)
>> Used Scenario Outline with out giving any examples. There is no need for Outline unless we are searching multiple texts (in this case).
>> Given step just has the Url in it. It should be more meaningful and understandable whoever reads it. Can say, 
    Given I am on Homepage (and let the Url be handled in the code)
>> Second step has double the’s (When I go the the header)

