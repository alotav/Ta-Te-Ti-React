const board = Array(9).fill(null);

const Board = () => {
  return (
    <main className="board">
      <h1>Ta-Te-Ti</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <div className="cell" key={index}>
              <span className="cell_content">{index}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Board;
