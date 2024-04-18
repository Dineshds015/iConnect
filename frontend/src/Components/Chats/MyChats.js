import React from 'react'
import ChatList from './ChatList'
import ActiveChat from './ActiveChat'

const MyChats = () => {
  return (
    <div className='grid grid-flow-col grid-cols-12 h-full'>
      <ChatList/>
      <ActiveChat/>
    </div>
  )
}

export default MyChats
