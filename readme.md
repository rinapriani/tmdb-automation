# TMDB Automated Testing

This repository contains automated tests for the TMDB website using Cypress and Cucumber.

## Test Case Scope

The automated tests cover the following scenarios:

1. **Scenario 1: Language Switch**

   - User login to the TMDB Movie website.
   - Switch language to Bahasa if specified in the scenario.

2. **Scenario 2: Favorite Movie Marking**
   - Search for two different movies.
   - Mark both movies as favorites.
   - Verify that the marked movies appear in the user's favorite list in the profile.
   - Navigate back to the homepage.

## Installation

```bash
git clone https://github.com/rinapriani/tmdb-automation
cd tmdb-automation
npm install
npm test open
```
