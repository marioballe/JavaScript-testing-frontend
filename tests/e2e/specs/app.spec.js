describe('My First Test', function() {
  it('Check the sort button', function() {
    cy.visit('/');

    // cy.get('.input').type('text').should('have.value', 'text');
    // cy.get('h1').should('contain', 'inner text')
    cy.get('sortButton').click();
  });
});
