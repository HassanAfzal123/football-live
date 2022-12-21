import React, {useState} from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scoreboard from './Scoreboard';

describe('<Scoreboard />', () => {

    var scoreboard = [
        {id: 0, homeTeam: 'France', homeTeamScore: '2', awayTeam: 'Spain', awayTeamScore: '3'},
        {id: 1, homeTeam: 'Portugal', homeTeamScore: '0', awayTeam: 'Argentina', awayTeamScore: '0'},
        {id: 2, homeTeam: 'Qatar', homeTeamScore: '2', awayTeam: 'Belgium', awayTeamScore: '1'},
    ]

    // Only clicking the edit button and checking all edge cases
    describe('clicking the edit button', () => {

        let handler
        handler = jest.fn().mockName('sendHandler');

        const editGame = async () => {
            
            render(<Scoreboard  scoreboard={scoreboard} setScoreBoard={handler}/>);
            
            userEvent.click(
                screen.getByTestId('scoreboard_match_0_edit'),
            );
        }

        //Check if input fields appeared after clicking the edit button
        it('input text fields appears', async () => {
            await editGame();
            expect(screen.getByTestId('scoreboard_match_0_hometeam_score_input').hidden).toEqual(false);
            expect(screen.getByTestId('scoreboard_match_0_awayteam_score_input').hidden).toEqual(false);
        });

        //Check if save button is disabled intially and only enabled when both input fields have some value
        it('save button enabled/disabled', async () => {
            await editGame();
            //Disabled initailly because both input fields are initially empty
            expect(screen.getByTestId('scoreboard_match_0_save').disabled).toEqual(true);

            //Filling home team score input field
            userEvent.type(
                screen.getByTestId('scoreboard_match_0_hometeam_score_input'),
                '30',
            );
            
            //Still expected to be disabled because away team input field is empty
            expect(screen.getByTestId('scoreboard_match_0_save').disabled).toEqual(true);

            //Filling away team score input field
            userEvent.type(
                screen.getByTestId('scoreboard_match_0_awayteam_score_input'),
                '30',
            );

            //Now save button should be enabled because both inputs are filled with scores
            expect(screen.getByTestId('scoreboard_match_0_save').disabled).toEqual(false);
        });
    });

    // Changing the scores and checking all the edge cases
    describe('update scores by clicking save button', () => {

        let handler
        handler = jest.fn().mockName('sendHandler');
        
        //For Alerts
        const alertMock = jest.spyOn(window,'alert').mockImplementation();

        const updateGame = async (score1, score2) => {
            
            render(<Scoreboard  scoreboard={scoreboard} setScoreBoard={handler}/>);
            
            userEvent.click(
                screen.getByTestId('scoreboard_match_0_edit'),
            );

            //Filling home team score input field
            userEvent.type(
                screen.getByTestId('scoreboard_match_0_hometeam_score_input'),
                score1,
            );

            //Filling home team score input field
            userEvent.type(
                screen.getByTestId('scoreboard_match_0_awayteam_score_input'),
                score2,
            );

            userEvent.click(
                screen.getByTestId('scoreboard_match_0_save'),
            );
        }

        //Check if input fields disappeared again after clicking the save button
        it('input text fields disappears after save', async () => {
            await updateGame('30','35');
            expect(screen.getByTestId('scoreboard_match_0_hometeam_score_input').hidden).toEqual(true);
            expect(screen.getByTestId('scoreboard_match_0_awayteam_score_input').hidden).toEqual(true);
        });

        //Check if save button disappeard after save
        it('check save button disappeared', async () => {
            await updateGame('30','35');
            expect(screen.getByTestId('scoreboard_match_0_save').hidden).toEqual(true);
        });

        //Check if edit buttons again enabled after save
        it('check edit button enabled', async () => {
            await updateGame('30','35');
            expect(screen.getByTestId('scoreboard_match_0_edit').disabled).toEqual(false);
        });

        //Checking alrert if invalid scores are saved
        it('checking alert on invalid home team scores', async () => {
            //When only home team score is invalid
            await updateGame('a0','1');
            expect(alertMock).toHaveBeenCalledTimes(1)
        });

        it('checking alert on invalid away team scores', async () => {
            //When only home team score is invalid
            await updateGame('1','b');
            expect(alertMock).toHaveBeenCalledTimes(2)
        });

        it('checking alert when both scores are invalid', async () => {
            //When only home team score is invalid
            await updateGame('a','b');
            expect(alertMock).toHaveBeenCalledTimes(3)
        })
    });

});