describe('Add a new game', () => {
    it('check add game featue', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="homeTeam"]')
        .type("Home Team");

        cy.get('[data-testid="awayTeam"]')
        .type("Away Team");

        cy.get('[data-testid="submitGame"]')
        .click();

        cy.contains('Home Team 0 - Away Team 0');
    });
});