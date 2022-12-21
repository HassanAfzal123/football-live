import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewGameForm from './addNewGame';

describe('<NewGameForm />', () => {
    describe('clicking the submit button', () => {
        let handler
        handler = jest.fn().mockName('sendHandler');
        const addGame = async () => {
            
            render(<NewGameForm  updateScoreBoard={handler}/>);
            
            userEvent.type(
                screen.getByTestId('homeTeam'),
                'Home Team',
            );

            userEvent.type(
                screen.getByTestId('awayTeam'),
                'Away Team',
            );

            userEvent.click(screen.getByTestId('submitGame'));
        }

        //Check if fields are cleared after the new match submission
        it('clears the text field', async () => {
            await addGame();
            expect(screen.getByTestId('homeTeam').value).toEqual('');
            expect(screen.getByTestId('awayTeam').value).toEqual('');
        });

        //Check if submitted data is received as expected in the parent component
        it('check the submitted data', async () => {
            // Check if returned value by the component is exactly same
            await waitFor(() =>
                expect(handler).toHaveBeenCalledWith({
                    'homeTeam': 'Home Team',
                    'homeTeamScore': 0,
                    'awayTeam': 'Away Team',
                    'awayTeamScore': 0
                
                })
            )
        })
    });
});