import React from 'react'
import styles from './Routine.module.css'
import { Link } from 'react-router-dom'

export default function Routine() {
  return (
    <div className={styles.routine}>
        <h3>Reading</h3>
        <div className={styles.tickers}>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
        </div>
    </div>
  )
}
