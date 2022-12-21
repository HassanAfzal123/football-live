describe('Add a new game', () => {
    it('check add game featue', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="homeTeam"]')
        .type("Home Team");

        cy.get('[data-testid="awayTeam"]')
        .type("Away Team");

        cy.get('[data-testid="submitGame"]')
        .click();

        // Using regex to match the string
        let regex = new RegExp("Home Team" + "\s*0\s*-\s*" + "Away Team" + "\s*0");
        cy.get('[data-testid="scoreboard"]').invoke('text').should('match', regex)
    });
});