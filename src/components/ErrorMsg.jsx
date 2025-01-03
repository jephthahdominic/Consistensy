import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import styles from './ErrorMsg.module.css'
export default function ErrorMsg() {
    const {state, dispatch} = useAppContext();
    const {errorMsg} = state
    useEffect(()=>{
        const id = setTimeout(() => {
            dispatch({type:"hideMessage"})
        }, 2000);
        return () => clearTimeout(id)
    }, [])
  return (
    <div className={`messageModal ${styles.error}`}>{errorMsg}</div>
  )
}
