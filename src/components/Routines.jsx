import Routine from './Routine'
import styles from './Routines.module.css'
export default function Routines() {
  return (
    <>
      <h1>Routines</h1>
      <section className={styles.routines}>
        <Routine />
        <Routine />
        <Routine />
      </section>
    </>
  )
}
