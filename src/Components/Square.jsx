import React from 'react'
import styles from "../Styles/styles.module.css"

export default function Square({ value}) {
  const handleClick = () => {
    console.log({value}, "clicked!")
  }

  return (
    <button className={styles.square} onClick={handleClick}>
      {value}
    </button>
  )
}
