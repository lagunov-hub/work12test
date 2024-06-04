describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get(".btn-warning").click()
    cy.get("#mail").type("test@test.com")
    cy.get("#pass").type("test")

    cy.contains('Submit').click()

    cy.contains("Add new").click()

    cy.get("#title").type("Слушай песню ветра")
    cy.get("#description").type("Первый роман японского писателя Харуки Мураками")
    cy.get("#authors").type("Харуки Мураками")
    cy.contains('Submit').click()
  })
})