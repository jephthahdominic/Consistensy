import { MdArrowRight } from 'react-icons/md'
import Button from './Button'
import styles from './Login.module.css'
import { FaArrowRight } from 'react-icons/fa'
import { CgGoogle } from 'react-icons/cg'

export default function Login() {
  return (
    <div className={styles.login}>
      <h2>CREATE ACCOUNT</h2>
      <p>Click the link below to signup with Google.</p>
      <form action="">
          <button><CgGoogle /> Login with Google</button>
      </form>
    </div>
  )
}
