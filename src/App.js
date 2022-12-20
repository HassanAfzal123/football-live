import React, { useState } from 'react';
import NewGameForm from "./components/addNewGame";

const App = () => {
  //State Variables
  const [scoreboard, setScoreBoard] = useState([])

  //Functions
  const updateScoreBoard = (newGame) => {
    setScoreBoard([newGame, ...scoreboard])
  }

  const printAAS = () => {
    console.log("HELLLLLLLLLLLLOOOOOOOOOOOOOOO")
  }
  //Rendering JSX
  return (
    <>
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
