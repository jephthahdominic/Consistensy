import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext'
import Routine from './Routine'
import styles from './Routines.module.css'
export default function Routines() {
  const {state} = useAppContext();
  const {routines} = state;
  console.log(routines)
  
  return (
    <>
      <h1>Routines</h1>
      <section className={styles.routines}>
        {routines?.map((routine)=>{
          <p>{routine.activity}</p>
        })}
      </section>
    </>
  )
}
