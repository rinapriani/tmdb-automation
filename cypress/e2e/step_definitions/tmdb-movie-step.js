/// <reference types ="Cypress"/>

import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

let userCookies;
const username = "rinapriani24";
const password = "tmdbtest";
const baseUrl = "https://www.themoviedb.org";

Before(() => {
  cy.visit(baseUrl);
  cy.get("#onetrust-accept-btn-handler")
    .contains("Accept All Cookies")
    .click({ force: true });

  cy.contains("Login").click();
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#login_button").click();
  cy.url().should("include", `/u/${username}`);

  cy.getCookie("tmdb.session").then((cookie) => {
    userCookies = cookie;
    cy.log("tmdb.session Cookie:", userCookies);
  });
});

Given("I switch language in Bahasa", () => {
  cy.visit(`${baseUrl}/settings/account`);

  cy.get("span[role='option']").contains("English (en-US)").should("not.exist");
  cy.get(".k-item").contains("Indonesian (id-ID)").click({ force: true });
  cy.get('[type="submit"][value="Save"]').click({ timeout: 50000 });
  cy.intercept("POST", "/pusher/auth").as("pusherAuth");
  cy.scrollTo("top");
});

Given("Search movie and mark as favorite for movie 1", () => {
  let movieName = "The Godfather";
  cy.visit(baseUrl);
  cy.get("input#inner_search_v4")
    .type(movieName)
    .get("input[value='Search']")
    .click();
  cy.url()
    .should("contain", movieName.split(" ")[0])
    .and("contain", movieName.split(" ")[1]);
  cy.get("input#search_v4").should("have.value", movieName);

  cy.get("div[id*='card_movie'] div.title h2").each(($el) => {
    let elementText = $el.text().toLowerCase();
    expect(elementText).to.include(movieName.split(" ")[0].toLowerCase());
    expect(elementText).to.include(movieName.split(" ")[1].toLowerCase());
  });
  cy.wait(5000);
  cy.contains(movieName).click();
  cy.wait(5000);
  cy.get("li.tooltip a#favourite").click();
});

When("Search movie and mark as favorite for movie 2", () => {
  let movieName2 = "Gran Turismo";
  cy.visit(baseUrl);
  cy.get("input#inner_search_v4")
    .type(movieName2)
    .get("input[value='Search']")
    .click();
  cy.url()
    .should("contain", movieName2.split(" ")[0])
    .and("contain", movieName2.split(" ")[1]);
  cy.get("input#search_v4").should("have.value", movieName2);

  cy.get("div[id*='card_movie'] div.title h2").each(($el) => {
    let elementText = $el.text().toLowerCase();
    expect(elementText).to.include(movieName2.split(" ")[0].toLowerCase());
    expect(elementText).to.include(movieName2.split(" ")[1].toLowerCase());
  });
  cy.wait(5000);
  cy.contains(movieName2).click();
  cy.wait(5000);
  cy.get("li.tooltip a#favourite").click();
});

Then(
  "Then Verify this movie show in favorite list in My Profile and back back to homepage",
  () => {
    cy.visit(baseUrl);
    cy.get('[class="no_click tooltip_hover"]').click();
    cy.visit(`${baseUrl}/u/${username}/watchlist`);
    cy.wait(5000);
    cy.visit(baseUrl);
  },
);
