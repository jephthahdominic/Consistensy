import { useAppContext } from '../contexts/AppContext'
import { useTheme } from '../contexts/ThemeContext';
import styles from './Loader.module.css'

export default function Loader(){
    const {dispatch} = useAppContext();
    const themeContext = useTheme()
    const {theme} = themeContext
    setTimeout(()=>{
        dispatch({type:"loaded"})
    }, 500)
    return(
        <div className={`${styles.loader} ${theme==='dark'? styles.darkLoader : styles.lightLoader}`}>
            <div className={`${styles.spinner} ${theme==='dark'? styles.darkSpinner : styles.lightSpinner}`}>
                <div className={styles.spinnerInner}>
                    <div className={styles.darkSpinnerCircle}></div>
                </div>
            </div>
        </div>
    )
}