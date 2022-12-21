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

        let homeTeamScore = await new Promise((resolve) => {
            cy.get('[data-testid="scoreboard_match_0_hometeam_score"]').then(($elem)=>{
                resolve($elem.text())
            })
        })

        let awayTeamScore = await new Promise((resolve) => {
            cy.get('[data-testid="scoreboard_match_0_awayteam_score"]').then(($elem)=>{
                resolve($elem.text())
            })
        })

        //Click finish button
        await cy.get('[data-testid="scoreboard_match_0_finish"]')
        .click();

        // Using regex to match the string
        let regex = new RegExp(homeTeam + "\s*" + homeTeamScore + "\s*-\s*" + awayTeam + "\s*" + awayTeamScore);
        cy.get('[data-testid="scoreboard"]').invoke('text').should('not.match', regex)
    });    
});