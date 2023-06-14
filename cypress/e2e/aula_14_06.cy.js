describe('template spec', () => {
  it('Novo requerimento', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select("ADS030 - Manutenção de Software e DevOps")
    cy.get('#inputProva').select("A2")
    cy.get('#inputArgumentacao').type("Eu mereço tirar 10!")
    cy.get('.btn-danger').click()

  })
})