import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home' style={{width:"100vw",
    height:"100vh", overflowY:"hidden"}}>
      <div className='container'>
        <SideBar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
