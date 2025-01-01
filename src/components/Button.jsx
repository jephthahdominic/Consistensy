import styles from './Button.module.css'

import React from 'react'

export default function Button({children, onClick}) {
  return (
    <button className={styles.cta} onClick={(e) => {
      e.preventDefault();
      onClick()
    }}>
        {children}
    </button>
  )
}
