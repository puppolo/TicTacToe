import './App.css';
import { useState } from 'react';

const App = () => {

  //counting turn
  const [turn, setTurn] = useState(0)
  //board to check the winner and basically a board
  const [board, setBoard] = useState([
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ])
  //handling overwriting X on O and O on X
  const [overlap, setOverlap] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ])
  //for showing the winner name
  const [show, setShow] = useState(false)
  const [winner, setWinner] = useState('')

  function handledClick(row, col) {
    //basic function when click show either X or O in their turn
    const copy = [...board]
    const copyoverlap = [...overlap]
    if(turn%2 === 0 && overlap[row][col] === false) {
      copy[row][col] = 'X'
      copyoverlap[row][col] = true
      setTurn(turn+1)
    } else if (turn%2 === 1 && overlap[row][col] === false){
      copy[row][col] = 'O'
      copyoverlap[row][col] = true
      setTurn(turn+1)
    }

    setOverlap(copyoverlap)
    setBoard(copy)

    //setlogic for winning
    if( (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') ||
        (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') ||
        (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') ||
        (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
        (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')
        ) {
      setWinner('X')
      //prevent from continue playing
      setOverlap([
        [true, true, true],
        [true, true, true],
        [true, true, true]
      ])
      //show the winner
      setShow(true)
    } else if ( (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
                (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
                (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') ||
                (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
                (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')
              ) {
                setWinner('O')
                //prevent from continue playing
                setOverlap([
                  [true, true, true],
                  [true, true, true],
                  [true, true, true]
                ])
                //show the winner
                setShow(true)
              }


  }

  return(
    <div className='center'>
      <h1>Tic-Tac-Toe</h1>
      {show && <div>The winner is {winner}</div>}
      <div>
        <button onClick={() => handledClick(0,0)}>{board[0][0]}</button>
        <button onClick={() => handledClick(0,1)}>{board[0][1]}</button>
        <button onClick={() => handledClick(0,2)}>{board[0][2]}</button>
      </div>
      <div>
        <button onClick={() => handledClick(1,0)}>{board[1][0]}</button>
        <button onClick={() => handledClick(1,1)}>{board[1][1]}</button>
        <button onClick={() => handledClick(1,2)}>{board[1][2]}</button>
      </div>
      <div>
        <button onClick={() => handledClick(2,0)}>{board[2][0]}</button>
        <button onClick={() => handledClick(2,1)}>{board[2][1]}</button>
        <button onClick={() => handledClick(2,2)}>{board[2][2]}</button>
      </div>
    </div>
  )
}

export default App;
