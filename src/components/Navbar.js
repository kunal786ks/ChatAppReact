import React, { useContext } from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {

  const {currentUser}=useContext(AuthContext)

  console.log(currentUser);
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img src={currentUser?.photoURL} alt=''/>
        <span style={{fontSize:'25px'}}>{currentUser?.displayName}</span>
        <button onClick={()=>signOut(auth)}>Log Out</button>
      </div>
    </div>

  )
}

export default Navbar
