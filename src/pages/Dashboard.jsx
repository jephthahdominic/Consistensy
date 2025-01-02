import { IoAddOutline } from 'react-icons/io5'
import { useTheme } from '../contexts/ThemeContext'
import styles from './Dashboard.module.css'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import Loader from '../components/Loader';
import Routines from '../components/Routines';
import { useEffect } from 'react';

export default function Dashboard() {
  const {theme} = useTheme();
  const navigate = useNavigate();
  const {state, dispatch} =  useAppContext()
  const {status} = state;
  useEffect(()=>{
    dispatch({type:"openLoader"})
  },[])
    
  return (
    <>
      {status === 'loading' ? <Loader/> : 
        <div className = {`${styles.app} ${theme==='light' ? 'light' : 'dark'}`}>
          <button to="add_routine" className={styles.button} onClick={()=> {dispatch({type:"openLoader"}); navigate('add_routine')}}>
            <IoAddOutline style={{fontSize:'3rem'}}/>
            Add Routine
          </button>        
          <Routines />
        </div>
      }
    </>
  )
}
