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
            <input
                type="text"
                data-testid="homeTeam"
                name="homeTeam"
                value={homeTeam}
                onChange={handleTextChange}
            />
            <input
                type="text"
                data-testid="awayTeam"
                name="awayTeam"
                value={awayTeam}
                onChange={handleTextChange}
            />
            <button
                data-testid="submitGame"
                onClick={handleSubmit}
            >
                Send
            </button>
        </>
    );
};

export default NewGameForm;