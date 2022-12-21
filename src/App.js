import React, { useState } from 'react';
import NewGameForm from "./components/AddNewGame";
import Scoreboard from './components/Scoreboard';
import Summary from './components/Summary';
import './App.css'

const App = () => {
  //State Variables
  const [scoreboard, setScoreBoard] = useState([
                                      {id: 2, homeTeam: 'Qatar', homeTeamScore: '2', awayTeam: 'Belgium', awayTeamScore: '1'},
                                      {id: 1, homeTeam: 'Portugal', homeTeamScore: '0', awayTeam: 'Argentina', awayTeamScore: '0'},
                                      {id: 0, homeTeam: 'France', homeTeamScore: '2', awayTeam: 'Spain', awayTeamScore: '3'}
                                    ])

  //Functions
  const updateScoreBoard = (newGame) => {
    setScoreBoard([newGame, ...scoreboard])
  }

  //Rendering JSX
  return (
    <>
      <center><h1>Live Football World Cup Score Board</h1></center>
      <NewGameForm scoreboard={scoreboard} updateScoreBoard={updateScoreBoard}/>
      <Scoreboard scoreboard={scoreboard} setScoreBoard={setScoreBoard}/>
      <Summary scoreboard={scoreboard} />
    </>
  )
}

export default App;
