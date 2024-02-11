/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./components/Square/Square";
import Square from "./components/Square/Square";

const TURNS = {
  x: "x",
  o: "o",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.x);

  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // revisamos combinaciones para ver quien gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        //devolvemos ganador
        console.log(`Ganador ${boardToCheck[a]}`)
        return boardToCheck[a];
      }
    }
  };



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
      console.log(`El ganador es ${newWinner}`)
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
      </main>
    </>
  );
}

export default App;
