Feature: Ecommerce online shopping website

  Background: 
    Given I am on the login page

  Scenario Outline: Login positive
    When I login with <email> and <password>
    Then I should see all the products in the main page

    Examples: 
      | email          | password |
      | tets@gmail.com |     1234 |

  Scenario: Don't have an account
    When I clicks Don't have account, Sing Up
    Then I should be in the registration page

  Scenario: Reset your password
    When I clicks reset your password
    Then I should be on the send a link to your email page
