import styles from './LandingPage.module.css'
import appIcon from '../assets/Ruthine_green.png';
import google from '../assets/icons8-google.png'

export default function LandingPage() {
  return (
    <div className={styles.hero}>
      <header className={styles.landingPage_header}>
        <img src={appIcon} alt="icon"/>
      </header>
      <main className={styles.landingPage_main}>
        <h1>Turn Habits into Happiness—Track Your Routine, Transform Your Life!</h1>
        <p>To begin your journey of consistency, click the link below to sign up with your google account and get started.</p>
        <button>
          <img src={google} alt="google icon" width={30} height={30}/>
          Sign up with Google
        </button>
      </main>
    </div>
  )
}
