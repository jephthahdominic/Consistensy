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
        <h1>Turn Habits <br/>into Happiness—Track Your Routine, Transform Your Life!</h1>
        <p>Whether you're looking to boost productivity, improve your health, or simply find balance in your daily life, 
          our intuitive tracker is here to guide and support you every step of the way.
        </p>
        <div>
          <p>To begin your journey of consistency, click the link below to sign up with your google account and get started.</p>
          <button>
            <img src={google} alt="google icon" width={30} height={30}/>
            Sign up with Google
          </button>
        </div>
      </main>
    </div>
  )
}
