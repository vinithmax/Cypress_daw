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



Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[placeholder="Search"]').type(productName);
  cy.get('button[type="submit"]').click();
});




// Arrays of predefined values
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eve@example.com'];
const passwords = ['Password123', 'Qwerty456', 'Letmein789', 'SecurePassword1', 'P@ssw0rd!'];
const lstnamess = ['subbu','rambu','somu','kamu','damu','panni','anni'];

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