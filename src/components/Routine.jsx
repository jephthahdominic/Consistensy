import React from 'react'
import styles from './Routine.module.css'

export default function Routine({data}) {
  const {activity} = data
  return (
    <div className={styles.routine}>
        <h3>{activity}</h3>
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
