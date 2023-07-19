import React, { useState } from 'react'
import Add from '../img/addAvtar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from '../firebase'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from 'react-router-dom';



const Register = () => {
  const [err, setErr] = useState(false);

  const navigate=useNavigate();
  const habdleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            console.log('reached here');
            //creating userschat
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    }  catch (err) {
      console.log(err);
      setErr(true)
    }


  }
  return (
    <div className='formControl'>
      <div className='formWrapper'>
        <span className='logo'>Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={habdleSubmit}>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file" style={{ display: 'none' }} placeholder='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>something went wrong</span>}
        </form>
        <p>You Dont Have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register
