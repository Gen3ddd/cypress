describe('My first test suite using cypress', ()=>
{
    it('The very first test', ()=>{
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
        cy.contains('span', 'This is your footer').should('be.visible');
        cy.get('textarea[placeholder="some text"]').should('be.visible');
    })
})