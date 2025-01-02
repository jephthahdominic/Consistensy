import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import styles from './SuccessMsg.module.css'
import { useNavigate } from 'react-router-dom';

export default function SuccessMsg() {
    const {dispatch} = useAppContext();
    const navigate = useNavigate()
    useEffect(()=>{
      const id = setTimeout(() => {
          dispatch({type:"hideMessage"})
      }, 2000);
      return () => clearTimeout(id)
    }, [])
  return (
    <div className={`messageModal ${styles.success}`}>Routine added successfully.</div>
  )
}
