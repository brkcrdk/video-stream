describe('my First Test', () => {
  it('Working properly', () => {
    cy.visit('localhost:3000');
    /**
     * Note: if i use have.text it expects all text to be there ut
     * if i use contain.text it expects some of the text the be there
     */
    cy.get('[data-test-id="testElement"]').should(
      'have.text',
      'Livekit Test Application'
    );
  });
});
