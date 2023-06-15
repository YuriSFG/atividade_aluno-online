describe('Testes do conceito médio CA', () => {
    it('retorna conceito SS - Superior', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('9');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('contain', 'SS - Superior');
    });

    it('retorna conceito MS - Médio Superior', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('7.2');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('contain', 'MS - Médio Superior');
    });

    it('retorna conceito MM - Médio', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('6.6');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('contain', 'MM - Médio');
    });

    it('retorna conceito MI - Médio Inferior', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('2.5');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('contain', 'MI - Médio Inferior');
    });

    it('retorna conceito II - Inferior', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('0.5');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('contain', 'II - Inferior');
    });

    it('retorna conceito SR - Sem rendimento', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('0');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('contain', 'SR - Sem rendimento');
    });

    it('exibe mensagem de erro para nota inválida', () => {
        cy.visit('/notas');
        cy.url().should('eq', 'http://localhost:3000/notas');
        cy.get('#nota-input').type('-2');
        cy.get('#calcular-button').click();
        cy.get('#conceito').should('not.exist');
        cy.get('.error-message').should('exist');
    });
});