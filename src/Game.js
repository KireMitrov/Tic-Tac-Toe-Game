import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers/helpers";
import Square from "./components/Square";
import Results from "./components/Results";


function Game() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);

    function handleClick(i) {
        const sq = squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        sq[i] = player;
        setSquares(sq);
        setxIsNext(!xIsNext);
    }

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }

    let player = xIsNext ? "X" : "O";
    let status = `Next player: ${player}`

    const winner = calculateWinner(squares);

    if (winner) {
        status = `Winner is: ${winner}`;
    }

    function resetBoard() {
        setSquares(Array(9).fill(null));
    }
    return <div className="game">
        <div className="game-board">
            <Results squares={squares} winner={winner}></Results>
            <div>

            <p className="status">{status}</p>
            <Board renderSquare={renderSquare} resetBoard={resetBoard} />
            </div>
        </div>
    </div>
}

export default Game