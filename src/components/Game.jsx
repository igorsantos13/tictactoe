import React from 'react'
import Board from './Board'
import { useState } from 'react'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function jumpToMove(nextMove){
        setCurrentMove(nextMove)
        
    }

    const moves = history.map((square, move)=>{
        let description;
        move > 0 ? description = 'Go to move #' + move : description = 'Go to game start'

        return (
            <li key={move}>
                <button onClick={()=>jumpToMove(move)}>{description}</button>
            </li>
        )
    })
    

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1)
        

    }

  return (
    <div className='game'>
        <div className="game-board">
            <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
  )
}
