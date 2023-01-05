describe('amazon busca itens', () => {

    beforeEach( () => {
        cy.visit('https://amazon.com.br');
    })
    it('Buscar celular', () => {
        cy.get('#twotabsearchtextbox').type('celular')
        cy.get('#nav-search-submit-button').click();
  })
})