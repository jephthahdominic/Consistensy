import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import styles from './ErrorMsg.module.css'
export default function ErrorMsg() {
    const {dispatch} = useAppContext()
    useEffect(()=>{
        const id = setTimeout(() => {
            dispatch({type:"hideMessage"})
        }, 2000);
        return () => clearTimeout(id)
    }, [])
  return (
    <div className={`messageModal ${styles.error}`}>Please fill in Every field in the form</div>
  )
}
