import { useAppContext } from '../contexts/AppContext'
import styles from './Loader.module.css'

export default function Loader(){
    const {dispatch} = useAppContext()
    setTimeout(()=>{
        dispatch({type:"loaded"})
    }, 2000)
    return(
        <div className={styles.loader}>
            <div className={styles.spinner}>
                <div className={styles.spinnerInner}>
                    <div className={styles.spinnerCircle}></div>
                </div>
            </div>
        </div>
    )
}