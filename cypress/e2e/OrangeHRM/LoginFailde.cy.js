///<reference types = 'cypress'/>
import data from '../../fixtures/example.json'


describe('Suit',()=>{

    it('Login Page 01',()=>{
        cy.visit('/login')
        cy.get('[name="username"]').type(data.Username)
        cy.get('[name="password"]').type(data.Password)
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        cy.url().should('include','/dashboard/index')
    })

    // Environment veriable
    it.only('Google.com',()=>{
        cy.visit(Cypress.env('login_url'))
        
    })
})