import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const email = e.target[0].value;
    const password = e.target[1].value;
   
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    }  catch (err) {
      console.log(err);
      setErr(true)
    }
  }
  return (
    <div className='formControl'>
     <div className='formWrapper'>
        <span className='logo'>Chat</span>
        <span className='title'>Sign In</span>
        <form onSubmit={handleSubmit}>
       
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
           
            <button>Login</button>
            {err && <span>something went wrong</span>}
        </form>
        <p>You Don't Have an account? <Link to='/register'>Register</Link></p>
     </div>
    </div>
  )
}

export default Login
