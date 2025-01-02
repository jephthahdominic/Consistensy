import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import styles from './SuccessMsg.module.css'

export default function SuccessMsg() {
    const {dispatch} = useAppContext();
    useEffect(()=>{
        const id = setTimeout(() => {
            dispatch({type:"hideMessage"})
        }, 2000);
        return () => clearTimeout(id)
    }, [])
  return (
    <div className={styles.msg}>Routine added successfully.</div>
  )
}
