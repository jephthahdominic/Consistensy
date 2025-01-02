import React from 'react'
import styles from './Routine.module.css'
import { Link } from 'react-router-dom'

export default function Routine() {
  return (
    <div className={styles.routine}>
        <header>
          <h3>Reading</h3>
          <Link>View details</Link>
        </header>
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
