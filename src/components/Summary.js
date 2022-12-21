import React, {useEffect, useState} from 'react';

const Summary = ({scoreboard}) => {
    //Hooks
    const [sortedScoreBoard, setSortedScoreBoard] = useState([])

    useEffect(()=>{
        let updatedScoreBoard = [...scoreboard]
        setSortedScoreBoard(updatedScoreBoard.sort(compare))
    },[scoreboard])

    //Function
    function compare( a, b ) {
        let sum_score_a = a.homeTeamScore + a.awayTeamScore
        let sum_score_b = b.homeTeamScore + b.awayTeamScore

        if ( sum_score_b < sum_score_a ) {
            return -1;
        }
        if ( sum_score_b > sum_score_a) {
            return 1;   
        }
        if (sum_score_b === sum_score_a) {
            if(a.id > b.id) 
                return -1;
            else 
                return 1;
        }
    }
    //Render
    return (
        <>
            <h3>Summary</h3>
            <div data-testid={`summary`}>
                {sortedScoreBoard.map((gameScore,i) => {
                return (
                    <div key={i}>
                        <span data-testid={`summary_match_${i}_hometeam`}>{gameScore.homeTeam}</span> 
                        <span data-testid={`summary_match_${i}_hometeam_score`}>{gameScore.homeTeamScore}</span>- 
                        <span data-testid={`summary_match_${i}_awayteam`}>{gameScore.awayTeam}</span> 
                        <span data-testid={`summary_match_${i}_awayteam_score`}>{gameScore.awayTeamScore}</span> 
                    </div>
                )
                })}
            </div>
        </>
    );
};

export default Summary;