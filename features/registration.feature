Feature: User registration

  Background: 
    Given User is in the registration page

  Scenario: User registration
    When User entered first name in the input field
    When User entered last name in the input field
    When User entered email in the input field
    When User entered password in the input field
    When User clicks Sign Up button
    Then User will be in the Sign In page

  Scenario: User already have an account
    When User clicks Already have an account Sign in
    Then User will be in the Sign In page
