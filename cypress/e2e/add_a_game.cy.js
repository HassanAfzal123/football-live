describe('Add a new game', () => {
    it('Displays the message in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="addGameBtn"]')
        .click();

        cy.get('[data-testid="addGameText"]')
        .type("home team-away team");

        cy.get('[data-testid="submitGame"]')
        .click();

        cy.contains('home team 0 - away team 0');
    });
});