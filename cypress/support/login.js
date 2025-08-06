import * as gc1 from "../support/globalcommand1.js";

export class Loginpage {


    EmailField(email) {
    gc1.findByData("login-email").clear().type(email);
  }

  SignupEmail(email){
   gc1.findByData('signup-email').clear().type(email)
  }


  passwordField(password) {
    gc1.findByData("login-password").clear().type(password);
  }

  nameField(username) {
    const randomName = username || `user_${getRandomString()}`;
    cy.get('[data-qa="signup-name"]').clear().type(randomName);
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
    cy.SignupLoginButton().click();
    this.EmailField(email);
    this.passwordField(password);
    this.loginButton();
  }

  invalidLogin(email, password) {
     cy.SignupLoginButton().click();
    this.EmailField(email);
    this.passwordField(password);
    this.loginButton();
gc1.findByText('Your email or password is incorrect!').should('be.visible')
  }

 emptylogin() {
    this.loginButton();
cy.contains('Username is required').should('be.visible')
 }

 Signup(username,email){
  cy.SignupLoginButton().click();
  this.nameField(username)
  this.SignupEmail(email)
  this.SignUpButton();
 }
}
