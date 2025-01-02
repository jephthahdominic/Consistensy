import { useContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import styles from './AddRoutine.module.css'
import { useTheme } from '../contexts/ThemeContext'
import { useAppContext } from '../contexts/AppContext'
import Loader from '../components/Loader'
import SuccessMsg from '../components/SuccessMsg'
import ErrorMsg from '../components/ErrorMsg'

export default function AddRoutine(){
    const {theme} = useTheme();
    const {state, dispatch} = useAppContext();
    const {success, status, error} = state;
    useEffect(()=>{
        dispatch({type:"openLoader"})
    },[])
    
    return(
        <>
            {status === "loading" ? <Loader /> :
                <div className={`${theme === "light" ? "light" : "dark"} ${styles.container}`}>
                    {success && <SuccessMsg />}
                    {error && <ErrorMsg />}
                    <div className={`${styles.wrapper}`}>
                        <h1>New Routine</h1>
                        <Form />
                    </div>
                </div>
            }
            
        </>
    )
}