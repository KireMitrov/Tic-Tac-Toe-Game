import React, { useEffect, useState } from "react";
import Button from "./Button";

function Results({ winner }) {

    let [xScore, setxScore] = useState(()=>{
        let xscore = parseInt(localStorage.getItem('xscore'));
        return xscore || 0;
    });
    let [oScore, setoScore] = useState(()=>{
        let oscore = parseInt(localStorage.getItem('oscore'));
        return oscore || 0;
    });

    useEffect(() => {
        if (winner === 'X') {
            setxScore(xScore + 1);
        } else if (winner === 'O') {
            setoScore(oScore + 1);
        }
    }, [winner]);

    useEffect(() => {
        localStorage.setItem('xscore', xScore);
        localStorage.setItem('oscore', oScore);
    },[xScore,oScore])

    function resetScore(){
        setxScore(0);
        setoScore(0);
    }

    return <div className="results">
        <p>Results</p>
        <p>Player X <span>{xScore}</span>:<span>{oScore}</span> Player O</p>
        {/* <button onClick={resetScore}>Reset Score </button> */}
        <Button onClick={resetScore} value="Reset Score"/>
    </div>
}

export default Results