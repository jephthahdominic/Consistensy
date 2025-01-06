import { signInWithRedirect } from 'firebase/auth'
import { auth, provider} from '../../FirebaseConfig'

import styles from './Login.module.css'
import { CgGoogle } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'

export default function Login() {
  function signInWithGoogle(e){
    e.preventDefault()
    signInWithRedirect(auth, provider);
  }
  return (
    <div className={styles.login}>
      <h2>Sign up with your Email to start tracking!</h2>
      <p>Enter your email address below to register.</p>
      <form>
        <div className={styles.email}>
          <input type="email" id='email'/>
          <span><MdEmail/></span>
        </div>
        <button>Verify</button>
      </form>
    </div>
  )
}
