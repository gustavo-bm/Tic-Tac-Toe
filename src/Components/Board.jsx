import React from "react";
import styles from "../Styles/styles.module.css";
import Square from "./Square";

export default function Board() {

  return (
    <>
      <h2>Board</h2>
      <div className={styles.board}>
        <div className={styles.boardRow}>
          <Square value="1"/>
          <Square value="2" />
          <Square value="3" />
        </div>

        <div className={styles.boardRow}>
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>

        <div className={styles.boardRow}>
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </div>
    </>
  );
}
