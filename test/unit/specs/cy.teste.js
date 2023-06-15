// Arquivo: login.spec.js

// Teste de login
describe('Login', () => {
    it('Realiza o login com sucesso', () => {
      // Visita a página de login
      cy.visit('http://localhost:3000/login');
  
      // Insere o nome de usuário
      cy.get('input[name="username"]').type('2023100');
  
      // Insere a senha
      cy.get('input[name="password"]').type('senha123');
  
      // Submete o formulário
      cy.get('.btn').click();
  
      // Verifica se o usuário está logado
      cy.url().should('eq', 'http://localhost:3000/');
      cy.contains('Bem-vindo, Edgar Amaya!').should('be.visible');
    });
  
    it('Senha inválida!', () => {
      cy.visit('http://localhost:3000/login');
  
      // Insere credenciais inválidas
      cy.get('input[alunoline]').type('usuario123');
      cy.get('input[senha321]').type('senhaerrada');
  
      cy.get('.btn]').click();
  
      // Verifica se a mensagem de erro é exibida
      cy.contains('Credenciais inválidas').should('be.visible');
    });
  });
  