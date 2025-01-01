import { useContext, useEffect } from 'react'
import Form from '../components/Form'
import styles from './AddRoutine.module.css'
import { useTheme } from '../contexts/ThemeContext'
import { useAppContext } from '../contexts/AppContext'
import Loader from '../components/Loader'

export default function AddRoutine(){
    const {theme} = useTheme();
    const {state} = useAppContext();
    const {status} = state;
    return(
        <>
            {status === "loading" && <Loader />}
            {status === "loaded" && ( 
                <div className={`${theme === "light" ? "light" : "dark"} ${styles.container}`}>
                    <div className={`${styles.wrapper}`}>
                        <h1>New Routine</h1>
                        <Form />
                    </div>
                </div>
            )}
        </>
    )
}