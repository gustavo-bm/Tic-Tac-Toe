import React, { useState } from 'react'
import styles from "../Styles/styles.module.css"

export default function Square({ value, onSquareClick}) {

  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  )
}
