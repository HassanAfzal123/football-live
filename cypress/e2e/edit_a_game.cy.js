describe('Edit a game', () => {
    it('check edit game feature', async () => {
        cy.visit('http://localhost:3000');

        //Assuming we have atleast 1 ongoing match
        let homeTeam = await new Promise((resolve) => {
            cy.get('[data-testid="scoreboard_match_0_hometeam"]').then(($elem)=>{
                resolve($elem.text())
            })
        })

        let awayTeam = await new Promise((resolve) => {
            cy.get('[data-testid="scoreboard_match_0_awayteam"]').then(($elem)=>{
                resolve($elem.text())
            })
        })

        await cy.get('[data-testid="scoreboard_match_0_edit"]')
        .click()

        //Choosed 30 and 35 goal score as these values are almost impossible to acheive in a real scenario
        await cy.get('[data-testid="scoreboard_match_0_hometeam_score_input"]')
        .type("30");

        await cy.get('[data-testid="scoreboard_match_0_awayteam_score_input"]')
        .type("35");

        await cy.get('[data-testid="scoreboard_match_0_save"]')
        .click();

        // Using regex to match the string
        let regex = new RegExp(homeTeam + "\s*30\s*-\s*" + awayTeam + "\s*35");
        cy.get('[data-testid="scoreboard"]').invoke('text').should('match', regex)
    });    
});