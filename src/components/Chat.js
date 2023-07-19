import React, { useContext } from 'react'
import addMore from '../img/addMore.png';
import cam from '../img/cam.png';
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
const Chat = () => {
  const {data}=useContext(ChatContext)
  console.log(data);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <img style={{
          borderRadius:'50%',
          height:'40px',
          width:'40px'
        }}src={data.user?.photoURL} alt=''/>
        <span style={{fontSize:'30px'}}>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={addMore} alt='' className='mx-2'/>
          <img src={cam} alt='' className='mx-2'/>
        </div>
      </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat
