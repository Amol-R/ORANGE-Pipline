///<reference types = 'cypress'/>
import data from '../../fixtures/example.json'


describe('Suit',()=>{

    it('Login Page',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.Username)
        cy.get('name="rrpassword"').type(data.Password)
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        cy.url().should('include','/dashboard/index11')
    })
})