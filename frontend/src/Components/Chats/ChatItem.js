import React, { useState } from 'react'

const ChatItem = ({userName,msg,time}) => {
  const [activeChat,setActiveChat] = useState(false);

  const handleActiveChat = ()=>{
    
    setActiveChat(true)

    // we need to fetch the chats and send these chats to active chat page and even activeChat state must be set to true, redux or context can be used to supply this data to active chat page
  }

  return (
    <div className='flex flex-row m-2 p-2 justify-between border-b-2 border-b-gray-200' onClick={handleActiveChat}>
    <div className='flex flex-row'>
      <img className='rounded-full h-14 w-14 mr-2' src="https://cdn-icons-png.freepik.com/512/10302/10302971.png" />
      <div className='flex flex-col'>
        <span className='font-bold'>{userName}</span>
        <span className='text-sm'>{msg.substring(0,20)+"..."}</span>
      </div>
      </div>
      <span className=''>{time}</span>
    </div>
  )
}

export default ChatItem
