import React, { useState } from 'react';
import NewGameForm from "./components/addNewGame";

const App = () => {
  //State Variables
  const [scoreboard, setScoreBoard] = useState([])

  //Functions
  const updateScoreBoard = (newGame) => {
    setScoreBoard([newGame, ...scoreboard])
  }

  //Rendering JSX
  return (
    <>
      <center><h1>Live Football World Cup Score Board</h1></center>
      <NewGameForm updateScoreBoard={updateScoreBoard}/>
      <div>
        {scoreboard.map((gameScore,i) => {
          return (
            <>
              <div>
                <span>{gameScore.homeTeam} {gameScore.homeTeamScore} - {gameScore.awayTeam} {gameScore.awayTeamScore}</span>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App;
