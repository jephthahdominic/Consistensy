import { useAppContext } from '../contexts/AppContext';
import styles from './Welcome.module.css'

export default function Welcome(){
    const {dispatch} = useAppContext()
    setTimeout(() => {
        dispatch({type:"openLoader"})
    }, 1600);
    return (
        <div className={styles.welcome}>
            <h2>Welcome</h2>
            <p>to</p>
            <h1>Ruth<span>i</span>ne</h1>
        </div>
    )
}