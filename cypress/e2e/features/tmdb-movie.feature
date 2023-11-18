#cypress/e2e/features/zero.feature

Feature: Automated testing for mark as favorite in TMDB Movie

Scenario: User login in TMBD Movie webiste and switch language in Bahasa
     Given I switch language in Bahasa


Scenario: User perform search the favorite movie and doing mark as favorite movie
    Given Search movie and mark as favorite for movie 1
    When Search movie and mark as favorite for movie 2
    Then Then Verify this movie show in favorite list in My Profile and back back to homepage