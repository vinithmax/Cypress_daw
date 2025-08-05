import { Loginpage } from "../support/login";
const loginPage = new Loginpage();
import { getRandomString } from "../support/utils"; 
import * as gc1 from "../support/globalcommand1.js";
import { getRandomEmail, getRandomName } from '../support/globalcommand1';

const username = getRandomName();
const email = getRandomEmail();


beforeEach('run this shit',()=>{
   cy.visit('/');
 cy.verifySiteHeaderText();
});

describe('Whole_Tests', () => {
  it('Login Test', () => {
     cy.intercept('POST', '**/login').as('loginRequest');
  cy.wait(1000)
  loginPage.Login('vinithtorres@gmail.com','V@admin123');
  cy.wait(1000)
      // Wait for API and assert response
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302); 
      cy.url().should('eq', `${Cypress.config().baseUrl}`);

  })

  it('Invalid login account',()=>{
 cy.intercept('POST', '**/login').as('loginRequest');
  cy.SignupLoginButton().click();
  cy.wait(1000)
    loginPage.invalidLogin('asdemailad@gmail.com','asdasdsda')
    cy.wait('@loginRequest').its('response.statusCode').should('be.oneOf', [200, 302]);
  })

  it('empty login',()=>{
    cy.wait(1000)
    loginPage.Login("e{backspace}", "e{backspace}");
      cy.focused().should('have.attr', 'required');

  })
it('Creation of user',()=>{
   cy.intercept('POST', '**/login').as('signup');
  loginPage.Signup(username,email);
  cy.wait('@signup').its('response.statusCode').should('eq', 200); 
      cy.url().should('eq', `${Cypress.config().baseUrl}`);
})
})


