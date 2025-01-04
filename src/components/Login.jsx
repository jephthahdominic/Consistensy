import { MdArrowRight } from 'react-icons/md'
import Button from './Button'
import styles from './Login.module.css'
import { FaArrowRight } from 'react-icons/fa'

export default function Login() {
  return (
    <div className={styles.login}>
      <h2>EMAIL REGISTRATION</h2>
      <p>Kindly enter your email to continue to ruth<span>i</span>ne</p>
      <form action="">
          <input type="Email" autoFocus/>
          <Button>Proceed <FaArrowRight /></Button>
      </form>
    </div>
  )
}
