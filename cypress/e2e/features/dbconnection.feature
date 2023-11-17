Feature: Login saucedemo website

Scenario: login with valid data
    Given i want to connect my db 
    When Visit login page 
    Then User enter username 
    Then User enter password 
    Then User click login button