import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given('i want to connect my db', () => {
    cy.task("READFROMDB", {
        dbConfig: Cypress.config('DB'),

        sql: `select * from "object"`
    }).then((result)=>{
        console.log(result.rows)
    })
});

When("Visit login page", () => {
  cy.visit('https://www.saucedemo.com');
});

Then('User enter username', () =>{
    cy.task("READFROMDB", {
      dbConfig: Cypress.config('DB'),

      sql: 'select * from "object"'
  }).then((result)=>{
    cy.get('#user-name').type(result.rows[2].username)
  })
})

Then('User enter password', () => {
  cy.task("READFROMDB", {
    dbConfig: Cypress.config('DB'),

    sql: 'select * from "object"'
}).then((result)=>{
  cy.get('#password').type(result.rows[2].password)
})

})

Then('User click login button', () => {
  cy.get('#login-button').click()
})