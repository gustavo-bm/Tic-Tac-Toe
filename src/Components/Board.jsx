import React from "react";
import styles from "../Styles/styles.module.css";
import Square from "./Square";

export default function Board() {
  const onClick = () => {

  }
  
  return (
    <>
      <h2>Board</h2>
      <div className={styles.board}>
        <div className={styles.boardRow}>
          <Square value={1} onSquareClick={onClick} />
          <Square value={2} onSquareClick={onClick} />
          <Square value={3} onSquareClick={onClick} />
        </div>

        <div className={styles.boardRow}>
          <Square value={4} onSquareClick={onClick} />
          <Square value={5} onSquareClick={onClick} />
          <Square value={6} onSquareClick={onClick} />
        </div>

        <div className={styles.boardRow}>
          <Square value={7} onSquareClick={onClick} />
          <Square value={8} onSquareClick={onClick} />
          <Square value={9} onSquareClick={onClick} />
        </div>
      </div>
    </>
  );
}
