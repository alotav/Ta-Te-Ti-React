import { WINNER_COMBOS } from "./constants";

export const checkEndGame = (newBoard) => {
    return newBoard.every((square)=> square !== null)
  }

export const checkWinner = (boardToCheck) => {
    // revisamos combinaciones para ver quien gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        //devolvemos ganador
        console.log(`Ganador ${boardToCheck[a]}`);
        return boardToCheck[a];
      }
    }
  };