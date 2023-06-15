describe('Testes do conceito médio CA', () => {
    it('retorna conceito SS - Superior', () => {
      cy.visit('/');
      cy.get('#nota-input').type('9.5');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('contain', 'SS - Superior');
    });

    it('retorna conceito MS - Médio Superior', () => {
      cy.visit('/');
      cy.get('#nota-input').type('7.5');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('contain', 'MS - Médio Superior');
    });

    it('retorna conceito MM - Médio', () => {
      cy.visit('/');
      cy.get('#nota-input').type('5.5');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('contain', 'MM - Médio');
    });

    it('retorna conceito MI - Médio Inferior', () => {
      cy.visit('/');
      cy.get('#nota-input').type('3.5');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('contain', 'MI - Médio Inferior');
    });

    it('retorna conceito II - Inferior', () => {
      cy.visit('/');
      cy.get('#nota-input').type('1.5');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('contain', 'II - Inferior');
    });

    it('retorna conceito SR - Sem rendimento', () => {
      cy.visit('/');
      cy.get('#nota-input').type('0.0');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('contain', 'SR - Sem rendimento');
    });

    it('exibe mensagem de erro para nota inválida', () => {
      cy.visit('/');
      cy.get('#nota-input').type('-1');
      cy.get('#calcular-button').click();
      cy.get('#conceito').should('not.exist');
      cy.get('.error-message').should('exist');
    });
  });