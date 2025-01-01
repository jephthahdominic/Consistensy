import { useContext } from 'react'
import Form from '../components/Form'
import styles from './AddRoutine.module.css'
import { useTheme } from '../contexts/ThemeContext'

export default function AddRoutine(){
    const {theme} = useTheme()
    return(
        <div className={`${theme === "light" ? "light" : "dark"} ${styles.container}`}>
            <div className={`${styles.wrapper}`}>
                <h1>New Routine</h1>
                <Form />
            </div>
        </div>
    )
}