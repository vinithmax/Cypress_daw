/// <reference types="Cypress"/>

const fs = require("fs");
// to validate the URL it contains the text
export function checkUrl(text) {
  cy.url().should("contain", text);
}
// to find an element by the text
export function findByText(text) {
  return cy.contains(text).should("be.visible");
}
// to find an element by TestId
export function findByTestId(id) {
  return cy.get(`[data-testid='${id}']`);
}

export function clickElement(elm) {
  return elm.click();
}

  export function findById(id) {
    return cy.get(`[id="${id}"]`);
}

export function findByData(id) {
  return cy.get(`[data-qa='${id}']`);
}

export function checkAlertMessage(text) {
  findByText(text).should("be.visible");
}
Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[placeholder="Search"]').type(productName);
  cy.get('button[type="submit"]').click();
});

export function getRandomEmail() {
  return `${getRandomName(4)}.${getRandomString(4)}@test.com`;
}


export function getRandomString(length = 5) {
  return Math.random().toString(36).substring(2, 2 + length);
}

//Random name function
export function getRandomName(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let name = '';
  for (let i = 0; i < length; i++) {
    name += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return name.charAt(0).toUpperCase() + name.slice(1) + '_' + getRandomString(3);
}

// Function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to fill the sign-up form with random data from predefined values
export function fillSignUpForm() {
  const firstname = getRandomItem(names);
  const lastname = getRandomItem(lstnamess);
  const email = getRandomItem(emails);
  const password = getRandomItem(passwords);

  cy.get('#create_account_page_firstname').type(firstname);
  cy.get('#create_account_page_lastname').type(lastname);
  cy.get('#create_account_page_email').type(email);
  cy.get('#create_account_page_password').type(password);

  // Optional: Add assertions to verify the typed values
  cy.get('#create_account_page_firstname').should('have.value', firstname);
  cy.get('#create_account_page_lastname').should('have.value', lastname);
  cy.get('#create_account_page_email').should('have.value', email);
  cy.get('#create_account_page_password').should('have.value', password);
}