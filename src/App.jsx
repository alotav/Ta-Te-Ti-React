/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./components/Square/Square";
import Square from "./components/Square/Square";
import confetti from "canvas-confetti";
import { TURNS, WINNER_COMBOS } from "./Logic/constants";
import Winner from "./components/Winner/Winner";
import { checkEndGame, checkWinner } from "./Logic/functions";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.x);

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }


  const updateBoard = (index) => {
    // si el indice no es null retorna sin modificar dato
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // console.log(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
      confetti()
      console.log(`El ganador es ${newWinner}`);}
    else if(checkEndGame(newBoard)){
        setWinner(false)
      }
  };

  return (
    <>
      <main className="board">
        <h2>Ta-Te-Ti</h2>
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        </section>

        <button onClick={resetGame}>Reiniciar Juego</button>

        <Winner winner={winner} resetGame={resetGame}/>

      </main>
    </>
  );
}

export default App;
