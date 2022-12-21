import React, { useState } from 'react';
import NewGameForm from "./components/addNewGame";
import Scoreboard from './components/Scoreboard';
import './App.css'

const App = () => {
  //State Variables
  const [scoreboard, setScoreBoard] = useState([
                                      {homeTeam: 'France', homeTeamScore: '2', awayTeam: 'Spain', awayTeamScore: '3'},
                                      {homeTeam: 'Portugal', homeTeamScore: '0', awayTeam: 'Argentina', awayTeamScore: '0'},
                                      {homeTeam: 'Qatar', homeTeamScore: '2', awayTeam: 'Belgium', awayTeamScore: '1'},
                                    ])

  //Functions
  const updateScoreBoard = (newGame) => {
    setScoreBoard([newGame, ...scoreboard])
  }

  //Rendering JSX
  return (
    <>
      <center><h1>Live Football World Cup Score Board</h1></center>
      <NewGameForm updateScoreBoard={updateScoreBoard}/>
      <Scoreboard scoreboard={scoreboard} setScoreBoard={setScoreBoard}/>
    </>
  )
}

export default App;
