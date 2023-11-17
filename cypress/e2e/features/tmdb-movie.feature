#cypress/e2e/features/zero.feature

Feature: Automated testing for mark as favorite in TMDB Movie

Scenario: User login in TMBD Movie webiste and switch language in Bahasa
    Given Open TMBD Movie website
    When Acess the login page
    Then I switch language in Bahasa


Scenario: User perform search the favorite movie and doing mark as favorite movie
    Given Search movie and mark as favorite for movie 1
    When Search movie and mark as favorite for movie 2
    Then Search movie and mark as favorite for movie 3
    Then Verify this movie show in favorite list in My Profile
    Then Back to homepage 


# Scenario: User doing remove the favorite movie list
#     Given I open pay bills menu
#     When I input pay bills
#     Then I Submit pay bills


# Scenario: User can ordering favorite list movie
#     Given 
#     When 
#     Then Start to type your Then step here