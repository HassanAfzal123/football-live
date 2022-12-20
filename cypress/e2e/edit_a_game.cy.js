describe('Edit a game', () => {
    it('check edit game feature', () => {
        cy.visit('http://localhost:3000');

        //Assuming we have atleast 1 ongoing match
        let homeTeam = cy.get('[data-testid="scoreboard_match_0_hometeam"]').text()
        let awayTeam = cy.get('[data-testid="scoreboard_match_0_awayteam"]').text()

        cy.get('[data-testid="scoreboard_match_0_edit"]')
        .click()

        //Choosed 30 and 35 goal score as these values are almost impossible to acheive in a real scenario
        cy.get('[data-testid="scoreboard_match_0_hometeam_score"]')
        .type("30");

        cy.get('[data-testid="scoreboard_match_0_awayteam_score"]')
        .type("35");

        cy.get('[data-testid="save_scoreboard_match_0"]')
        .click();

        cy.contains(`${homeTeam} 30 - ${awayTeam} 35`);
    });    
});