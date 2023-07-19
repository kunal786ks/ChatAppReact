import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {
  
  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext)
  const ref=useRef()
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
  },[message])
  return (
    <div ref={ref}>
      <div className={`message ${message.senderId===currentUser.uid && "owner"}`}>
        <div className='messageInfo'>
          <img src={message.senderId===currentUser.uid ?
          currentUser.photoURL:data.user.photoURL} alt=''/>
          <span>just Now</span>
        </div>
        <div className='messageContent'>
          <p>{message.text}</p>
          {message.img && <img style={{
            borderRadius:'10px 0px 10px 0px',
            filter:'drop-shadow(20px 20px 10px gray)'
          }}src={message.img} alt=''/>}

        </div>
      </div>
    </div>
  )
}

export default Message
