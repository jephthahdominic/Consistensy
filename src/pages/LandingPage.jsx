import styles from './LandingPage.module.css'
import Login from '../components/Login'

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
        <Login />
    </div>
  )
}
