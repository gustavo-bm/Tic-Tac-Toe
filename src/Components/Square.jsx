import React from 'react'
import styles from "../Styles/styles.module.css"

export default function Square({ value, onSquareClick }) {
  return (
    <div className={styles.square} onClick={onSquareClick}>
      {value}
    </div>
  )
}
