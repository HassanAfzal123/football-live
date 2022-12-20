import React, {useState} from 'react';

const NewGameForm = ({updateScoreBoard}) => {
    //State Variables
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');

    //Functions
    const handleTextChange = (e) => {
        if(e.target.name === 'homeTeam')
            setHomeTeam(e.target.value);
        else
            setAwayTeam(e.target.value);
    }

    const handleSubmit = () => {
        let game = {
            'homeTeam': homeTeam,
            'homeTeamScore': 0,
            'awayTeam': awayTeam,
            'awayTeamScore': 0
        }
        updateScoreBoard(game);
        setHomeTeam('');
        setAwayTeam('');
    }  

    //Render
    return (
        <>
            <h3>Add New Game</h3>
            <input
                type="text"
                data-testid="homeTeam"
                name="homeTeam"
                value={homeTeam}
                onChange={handleTextChange}
                placeholder={"Home Team Name"}
            />
            <input
                type="text"
                data-testid="awayTeam"
                name="awayTeam"
                value={awayTeam}
                onChange={handleTextChange}
                placeholder={"Away Team Name"}
            />
            <button
                data-testid="submitGame"
                onClick={handleSubmit}
            >
                Add Game
            </button>
        </>
    );
};

export default NewGameForm;