Feature: Verify Login and Logout functionality

  In order to verify login/logout
  As a user
  I want to enter details for username and password and see


  Background:
    Given I goto herokuapp login page

  @ValidLogin @Smoke
  Scenario: Verify login with Valid credentials

    When I enter tomsmith and SuperSecretPassword!
    And I click on login button
    Then I should be able to navigate to secure area


  @InvalidLogin @Smoke
  Scenario Outline: Verify login with Invalid credentials

    When I enter <Username> and <Password>
    And I click on login button
    Then I should see error message

    Examples:
      | Username | Password |
      |          | password |
      | username |          |
      | user     | pass     |
      | £@$^$&   | pwdddd   |


  @Logout @Smoke
  Scenario: Verify Logout

    Given I am logged in
    When I click the logout button
    Then I should successfully logout