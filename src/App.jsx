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

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.x);

  const updateBoard = (index) => {
    // si el indice no es null retorna sin modificar dato
    if (board[index]) return

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    console.log(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
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
