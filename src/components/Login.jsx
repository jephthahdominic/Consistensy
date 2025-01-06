import { getAuth, signInWithRedirect } from 'firebase/auth'
import { provider} from '../../FirebaseConfig'

import styles from './Login.module.css'
import { CgGoogle } from 'react-icons/cg'

export default function Login() {
  const auth = getAuth()
  function signInWithGoogle(e){
    e.preventDefault()
    signInWithRedirect(auth, provider).then((result) => console.log(result))
  }
  return (
    <div className={styles.login}>
      <h2>Sign up with google to start tracking!</h2>
      <p>Click the link below to signup with Google.</p>
      <form>
          <button onClick={(e)=>signInWithGoogle(e)}><CgGoogle /> Login with Google</button>
      </form>
    </div>
  )
}
