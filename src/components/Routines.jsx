import { useAppContext } from '../contexts/AppContext'
import Routine from './Routine'
import styles from './Routines.module.css'

export default function Routines() {
  const {state} = useAppContext();
  const {routines} = state;
  const data = routines
  
  return (
    <>
      <h1>Routines</h1>
      <section className={styles.routines}>
        {data?.map((data)=>{
          <Routine data={data}/>
        })}
      </section>
    </>
  )
}
