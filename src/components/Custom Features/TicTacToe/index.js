import { useState } from 'react'
import Board from './Board'
import "./style.css"
import {checkWinner, initialState} from './utils/ticTacToe'

const TicTacToe = ({size=3}) => {
    const [board,setBoard] = useState(initialState(size)) //creating 2D array
    const [turnX,setTurnX] = useState(true);

    const winner = checkWinner(board,size)

    const status = winner ? `Winner is ${winner}` : turnX ? 'Player X turn' : 'Player O turn';

    const handleClick = (rowIdx,colIdx)=>{
        if(board[rowIdx][colIdx] || winner){
            return
        }
        const deepCopyArray = JSON.parse(JSON.stringify(board)); //deepCopy
        deepCopyArray[rowIdx][colIdx] = turnX ? 'X' : 'O';
        setBoard(deepCopyArray)
        setTurnX(!turnX)
    }

    const handleReset = () =>{
        setBoard(initialState(size));
    }
  return (
    <div className='container'>
        <Board size={size} board={board} handleClick={handleClick}/>
        <div className="status">Status: {status}</div>
        <button className="reset" onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}

export default TicTacToe