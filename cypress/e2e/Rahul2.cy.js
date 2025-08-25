
/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice")
cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')//.should('have.value','option1')
cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
cy.get('#autocomplete').should('be.visible').type('ind')

cy.get('.ui-menu-item').each(($el,index,$list)=> {

    if($el.text()==='India'){
        cy.wrap($el).click();
    }
})
cy.get('#autocomplete').should('have.value','India')
})
})