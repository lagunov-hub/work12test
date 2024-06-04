describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('login UnHappy Path', ()=>{
      cy.get(".ml-auto > .ml-2").click();

      cy.get("#mail").type("test@test.com");
      cy.get("#pass").type("wrong");
      cy.get('form > .ml-2').click();
      cy.get('.mb-3').contains('Неправильая почта или пароль').should('be.visible');
    })
})