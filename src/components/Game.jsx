import { useState } from 'react'
import TURNS from '../const/turns'
import { Square } from './Square'
import { Footer } from './Footer'
import { verifyWinner } from '../logic/verify-winner'

export const Game = () => {
  const [games, setGames] = useState(1)  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  const [letterBoard, setLetterBoard] = useState({ [TURNS.X]: 0, [TURNS.O]: 0 })

  function updateBoard(index) {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const winnerPlayer = verifyWinner(turn,newBoard)
    if (!winnerPlayer) {
      changeTurn()
    } else {
      setWinner(winnerPlayer)
      updateLetterBoard()
    }
  }

  function nextGame() {
    if (games === 3) {
      return resetGame()
    }
    setGames(games + 1)
    setBoard(Array(9).fill(null))
    setWinner(null)
    changeTurn()
  }
  
  function resetGame() {
    setGames(1)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setLetterBoard({ [TURNS.X]: 0, [TURNS.O]: 0 })
  }

  function changeTurn() {
    setTurn((oldTurn) => oldTurn === TURNS.X ? TURNS.O : TURNS.X)
  }

  function updateLetterBoard () {
    const newLetterBoard = { ...letterBoard }
    newLetterBoard[TURNS[turn.toUpperCase()]] = newLetterBoard[TURNS[turn.toUpperCase()]] + 1
    setLetterBoard(newLetterBoard)
  }

  return (
    <main>
      <h1 className="main-title" >Ronda {games} de 3</h1>
      <div className="board">
        {
          board.map((cell, index) => <Square
              key={index}
              index={index} 
              updateBoard={updateBoard}
              isSelected={cell !== null}
            >
              { cell && <img className='icon' src={`./icons/${cell?.toLowerCase()}.svg`} /> }
            </Square>
          )
        }
      </div>
      <div className='next-box'>
        { (winner && games < 3) && <button className='next-button' onClick={nextGame}>Siguente Juego</button> }
      </div>
      <Footer reset={resetGame} letterBoard={letterBoard} />
      <p className='made-by'>Hecho por <a href='https://github.com/DaniPoot'>Daniel Poot</a></p>
    </main>
  )
}
