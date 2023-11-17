/// <reference types ="Cypress"/>

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const tmdbMoviePageObject = require('../page_object/tmdb-movie-page-object')

//User login in TMBD Movie webiste and switch language in Bahasa

Given ('Open TMBD Movie website', () => {
    cy.visit('https://www.themoviedb.org/')
});

When ('Acess the login page', () => {
    //cy.get('a[href="/login"]').should('have.text', 'Login').click()
    cy.contains('Login').click()
    cy.get('#username').type('rinapriani24')
    cy.get('#password').type('tmdbtest')
    cy.get('#login_button').click()
    cy.url().should('include','/u/rinapriani24')
    cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
    
});


Then ('I switch language in Bahasa', () => {
    cy.visit('https://www.themoviedb.org/settings/account')
    cy.wait(5)
    // cy.get("span[role= 'option']").contains('English (en-US)').click()
    // cy.get('.k-item').contains('Indonesian (id-ID)').click({force: true})
    // cy.get('[type="submit"][value="Save"]').click({timeout : 50000});
})


// User perform search the favorite movie and doing mark as favorite movie

Given ('Search movie and mark as favorite for movie 1', () => {
    cy.visit('https://www.themoviedb.org/')
    cy.get('#onetrust-accept-btn-handler').contains('Accept All Cookies').click({force: true})
    cy.get('#inner_search_v4').type('One Piece')
    cy.get('[type="submit"][value="Search"]').click();
    cy.get('[class= "result"]').contains('ONE PIECE').click()
    cy.url().should('include','/tv/111110-one-piece')
    // cy.get("span[class= 'glyphicons_v2 heart white false']").click()

})

When ('Search movie and mark as favorite for movie 2', () => {
    cy.visit('https://www.themoviedb.org/')
    cy.get('#inner_search_v4').type('SPY X FAMILY')
    cy.get('[type="submit"][value="Search"]').click();
    cy.get('[class= "result"]').contains('SPY x FAMILY').click()
    cy.url().should('include','/tv/120089-spyxfamily')
    cy.get("span[class= 'glyphicons_v2 heart white false']").click()

})

Then ('Search movie and Mark as favorite for movie 3', () => {
    cy.visit('https://www.themoviedb.org/')
    cy.get('#inner_search_v4').type('Avatar')
    cy.get('[type="submit"][value="Search"]').click();
    cy.get('[class= "result"]').contains('Avatar: The Way of Water').click()
    cy.url().should('include','/movie/76600-avatar-the-way-of-water')
    cy.get("span[class= 'glyphicons_v2 heart white false']").click()

})


Then ('Verify this movie show in favorite list in My Profile', () => {


})