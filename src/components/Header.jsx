import { useState } from 'react'
import styles from './Header.module.css'
import { MdLightMode, MdDarkMode, MdLight } from 'react-icons/md'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

export default function Header() {

  const {theme, changeTheme} = useTheme()
  
  return (
    <header className={styles.header}>
        <Link to='/'>Ruth<span>i</span>ne</Link>
        <button onClick={()=>changeTheme()}>
          {theme === 'light' ? (
            <>
              <MdDarkMode/> 
              <span>Dark</span>
            </>
          ) : (
            <>
              <MdLightMode/> 
              <span>Light</span>
            </>
          )}   
        </button>
    </header>
  )
}
