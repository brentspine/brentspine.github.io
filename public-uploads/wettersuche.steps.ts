import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let stadt: string;

Given("Ich navigiere zur Wetter-Startseite", () => {
  cy.visit(Cypress.env("wetterStartseiteUrl"));
});

When("Ich suche nach {string} in der Suchleiste", (suchbegriff: string) => {
  stadt = suchbegriff;

  cy.intercept("GET", `**/weather*${suchbegriff}*`, {
    fixture: "wetter-berlin.json",
  }).as("getWeather");

  cy.get('[data-cy="city-input"]').clear().type(suchbegriff, { force: true });
});

When("Ich bestätige die Suche über den Suchen-Button", () => {
  cy.get('[data-cy="search-button"]').click({ force: true });
});

Then("Die Wetterdaten für {string} sollten angezeigt werden", (erwarteteStadt: string) => {
  cy.wait("@getWeather");

  cy.get('[data-cy="city-name"]').should("contain", erwarteteStadt);
  cy.get('[data-cy="temperature"]').should("be.visible");
  cy.get('[data-cy="weather-condition"]').should("be.visible");
});
