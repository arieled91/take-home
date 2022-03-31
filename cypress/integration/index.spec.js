/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads all items and displays at least one on screen", () => {
    cy.get('[data-testid="house-list"] > div').should("have.length", 24);
    cy.get('[data-testid="house-list"] > :nth-child(1)').should("be.visible");
  });

  it("loads more items on scroll", () => {
    cy.intercept("*").as("getHouses");
    cy.wait(["@getHouses"]);
    cy.scrollTo("bottom");
    cy.wait(["@getHouses"]);
    cy.get('[data-testid="house-list"] > div').should("have.length", 48);
  });
});
