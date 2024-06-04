describe('Test BookApp', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('login Happy Path', ()=>{
    cy.get(".ml-auto > .ml-2").click();

    cy.get("#mail").type("test@test.com");
    cy.get("#pass").type("test");
    cy.get('form > .ml-2').click();
    cy.get('.pt-2').contains('Добро пожаловать test@test.com').should('be.visible')
  })
})