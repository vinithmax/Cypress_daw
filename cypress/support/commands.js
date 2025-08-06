
import './commands'
import users from '../fixtures/users.json';

// Cypress.Commands.add('getRandomUsername', () => {
//   const usernameList = users.username;
//   const randomUser = usernameList[Math.floor(Math.random() * usernameList.length)];
//   return cy.wrap(randomUser); // Wrap to use inside `.then()`
// });



//Logo

Cypress.Commands.add('verifySiteHeaderText', () => {
  cy.get('a > img').should('be.visible');
});

//Home button 
Cypress.Commands.add('Homebutton',()=>{
   cy.get('.shop-menu > .nav > :nth-child(1) > a')
});



//Products button
Cypress.Commands.add('productsButton',()=>{
  cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible').should('include.text','Products')

})

//Cart button
Cypress.Commands.add('CartButton',()=>{
  cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').should('include.text','Cart')
})

//Signuup/Login button
Cypress.Commands.add('SignupLoginButton',()=>{
  cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').should('include.text',' Signup / Login')
})


Cypress.Commands.add('TestcasesButton',()=>{
  cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').should('include.text',' Test Cases')
})

Cypress.Commands.add('ContactUsButton',()=>{
  cy.get('.shop-menu > .nav > :nth-child(8) > a').should('be.visible').should('include.text',' Contact us')
})


function generateRandomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

function generateRandomEmail() {
  return `${generateRandomString(6)}@example.com`;
}