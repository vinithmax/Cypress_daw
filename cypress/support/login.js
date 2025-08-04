import * as gc1 from "../support/globalcommand1.js";
import { getRandomString } from './utils';  // adjust path if needed
export class Loginpage {
  visitpage() {
    cy.visit('/');
  }

    EmailField(email) {
    gc1.findByData("login-email").type(email);
  }

  passwordField(password) {
    gc1.findByData("login-password").type(password);
  }

  NameField(username) {
    const randomName = username || `user_${getRandomString()}`;
    cy.get('[data-qa="signup-name"]').type(randomName);
  }
  loginButton() {
    gc1.findByData("login-button").click();
  }

  SignUpButton(){
  cy.get ('[data-qa="signup-button"]').click();
  }




  Logout() {
   // just in case not already logged in
    cy.url().should('include', 'inventory.html');
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').contains('Logout').click();
    cy.url().should('contain', '');
  }

  Login(email, password) {
    this.EmailField(email);
    this.passwordField(password);
    this.loginButton();


  }



  invalidLogin(email, password) {
    this.EmailField(email);
    this.passwordField(password);
    this.loginButton();
gc1.findByText('Your email or password is incorrect!').should('be.visible')

  }

 emptylogin() {
   // this.usernamefield(username);
   // this.passwordField(password);
    this.loginButton();
cy.contains('Username is required').should('be.visible')
 }
}