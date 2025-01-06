import {getAuth, sendSignInLinkToEmail} from 'firebase/auth'
import {actionCodeSettings} from '../../FirebaseConfig'

import styles from './Login.module.css'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'

export default function Login() {
  const auth = getAuth()
  const [email, setEmail] = useState(null);

  function handleSignin(){
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(()=>{
      alert("link successfully sent to your email");
      localStorage.setItem("SIGNINEMAIL", email);
    }).catch(err => {
      console.log(err);
      alert("an error occured")
    })
  }
  return (
    <div className={styles.login}>
      <h2>Sign up with your Email to start tracking!</h2>
      <p>Enter your email address below to register.</p>
      <form>
        <div className={styles.email}>
          <input type="email" id='email' onChange={(e)=>setEmail(e.target.value)}/>
          <span><MdEmail/></span>
        </div>
        <button onClick={(e)=>{
          e.preventDefault()
          handleSignin()
        }}>Verify</button>
      </form>
    </div>
  )
}
