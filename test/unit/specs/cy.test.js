describe('Login', () => {
    it('Realiza o login com sucesso', () => {
    
      cy.visit('http://localhost:3000/login');
  
      
      cy.get('input[name="username"]').type('2023100');
  
      
      cy.get('input[name="password"]').type('senha123');
  
      
      cy.get('.btn').click();
  
      
      cy.url().should('eq', 'http://localhost:3000/');
      cy.contains('Olá, Edgar Amaya!').should('be.visible');
    });
  
    it('Senha inválida!', () => {
      cy.visit('http://localhost:3000/login');
  
      
      cy.get('input[alunoline]').type('usuario123');
      cy.get('input[senha321]').type('senhaerrada');
  
      cy.get('.btn]').click();
  
      
      cy.contains('Credenciais inválidas').should('be.visible');
    });
  });
  