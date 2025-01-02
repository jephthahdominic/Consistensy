import { useContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import styles from './AddRoutine.module.css'
import { useTheme } from '../contexts/ThemeContext'
import { useAppContext } from '../contexts/AppContext'
import Loader from '../components/Loader'
import SuccessMsg from '../components/SuccessMsg'

export default function AddRoutine(){
    const {theme} = useTheme();
    const {state} = useAppContext();
    const {showMessage, status} = state;
    
    return(
        <>
            {status === "loading" ? <Loader /> :
                <div className={`${theme === "light" ? "light" : "dark"} ${styles.container}`}>
                    {showMessage && <SuccessMsg />}
                    <div className={`${styles.wrapper}`}>
                        <h1>New Routine</h1>
                        <Form />
                    </div>
                </div>
            }
            
        </>
    )
}