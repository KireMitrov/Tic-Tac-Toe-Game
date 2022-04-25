import React, { useEffect, useState } from "react";
import Button from "./Button";

function Results({ winner }) {

    let [xScore, setxScore] = useState(0);
    let [oScore, setoScore] = useState(0);

    useEffect(() => {
        if (winner === 'X') {
            setxScore(xScore + 1);
        } else if (winner === 'O') {
            setoScore(oScore + 1);
        }
    }, [winner]);

    function resetScore(){
        setxScore(0);
        setoScore(0);
    }

    return <div className="results">
        <p>Results</p>
        <p>Player X <span>{xScore}</span>:<span>{oScore}</span> Player O</p>
        <button onClick={resetScore}>Reset Score </button>
    </div>
}

export default Results