import React, {useState} from 'react';

const Scoreboard = ({scoreboard, setScoreBoard}) => {
    //State Variables Hooks
    const [editGame, setEditGame] = useState(0)
    const [newHomeTeamScore, setNewHomeTeamScore] = useState('')
    const [newAwayTeamScore, setNewAwayTeamScore] = useState('')

    //Functions
    const handleEdit = (gameId) => {
        setEditGame(1)
        document.getElementsByName(`scoreboard_match_${gameId}_hometeam_score_input`)[0].removeAttribute("hidden")
        document.getElementsByName(`scoreboard_match_${gameId}_awayteam_score_input`)[0].removeAttribute("hidden")
        document.getElementsByName(`scoreboard_match_${gameId}_save`)[0].removeAttribute("hidden")
    }

    const handleScoreChange = (e) => {
        if(e.target.name.split('_')[3] === 'hometeam')
            setNewHomeTeamScore(e.target.value)
        else
            setNewAwayTeamScore(e.target.value)
    }

    const saveGame = (gameId) => {

        if(( parseInt(newHomeTeamScore) || newHomeTeamScore === 0 ) && ( parseInt(newAwayTeamScore) || newAwayTeamScore === 0 )) {
            const updatedScoreBoard = scoreboard.map((game,index) => {
                if(index === gameId)
                    game = {...game, homeTeamScore: newHomeTeamScore, awayTeamScore: newAwayTeamScore}
                
                return game
            })

            setScoreBoard(updatedScoreBoard)
        } else {
            alert('Invalid input !')
        }
        //Reset values
        document.getElementsByName(`scoreboard_match_${gameId}_hometeam_score_input`)[0].setAttribute("hidden",true)
        document.getElementsByName(`scoreboard_match_${gameId}_awayteam_score_input`)[0].setAttribute("hidden",true)
        document.getElementsByName(`scoreboard_match_${gameId}_save`)[0].setAttribute("hidden",true)
        setEditGame(0)
        setNewHomeTeamScore('')
        setNewAwayTeamScore('')
    }

    const finishGame = (gameId) => {
        const updatedScoreBoard = scoreboard.filter((item,index) => index !== gameId)
        setScoreBoard(updatedScoreBoard)
    }

    //Render
    return (
        <>
            <h3>Score Board</h3>
            <div data-testid={`scoreboard`}>
                {scoreboard.map((gameScore,i) => {
                return (
                    <div key={i}>
                        <span data-testid={`scoreboard_match_${i}_hometeam`}>{gameScore.homeTeam}</span> 
                        <span data-testid={`scoreboard_match_${i}_hometeam_score`}>{gameScore.homeTeamScore}</span>- 
                        <span data-testid={`scoreboard_match_${i}_awayteam`}>{gameScore.awayTeam}</span> 
                        <span data-testid={`scoreboard_match_${i}_awayteam_score`}>{gameScore.awayTeamScore}</span> 
                        <input
                            type="text"
                            data-testid={`scoreboard_match_${i}_hometeam_score_input`}
                            name={`scoreboard_match_${i}_hometeam_score_input`}
                            value={newHomeTeamScore}
                            onChange={handleScoreChange}
                            placeholder={`New Score For ${gameScore.homeTeam}`}
                            hidden={true}
                        />
                        <input
                            type="text"
                            data-testid={`scoreboard_match_${i}_awayteam_score_input`}
                            name={`scoreboard_match_${i}_awayteam_score_input`}
                            value={newAwayTeamScore}
                            onChange={handleScoreChange}
                            placeholder={`New Score For ${gameScore.awayTeam}`}
                            hidden={true}
                        />
                        <button
                            data-testid={`scoreboard_match_${i}_edit`}
                            onClick={() => handleEdit(i)}
                            disabled={editGame ? true : false}
                        >
                            Edit Game
                        </button>
                        <button
                            data-testid={`scoreboard_match_${i}_save`}
                            name={`scoreboard_match_${i}_save`}
                            onClick={() => saveGame(i)}
                            hidden={true}
                            disabled={newHomeTeamScore && newAwayTeamScore ? false : true}
                        >
                            Save Game
                        </button>
                        <button
                            data-testid={`scoreboard_match_${i}_finish`}
                            name={`scoreboard_match_${i}_save`}
                            onClick={() => finishGame(i)}
                            disabled={editGame ? true : false}
                        >
                            Finish Game
                        </button>
                    </div>
                )
                })}
            </div>
        </>
    )
}

export default Scoreboard;