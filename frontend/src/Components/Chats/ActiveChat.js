import { Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'
import ScrollableChat from './ScrollableChat'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ActiveChat = () => {
    const [activeChat,setActiveChat] = useState(true) // can use useSelector to subscribe to activeChat
    const handleActiveChat = ()=>{
      setActiveChat(false) // we somehow need to send this state to <ChatList/> redux is solution or context.
    }
    const OtherUser = null
  return (
   
    <div className={`${activeChat? "col-span-12" : "hidden"} mx-4 md:block md:col-span-7 lg:col-span-8 bg-gray-50 mt-24 md:mr-4   h-[90vh]`}>
    {!activeChat ? (
      <div className='flex items-center justify-center content-center h-full'>
        <span>Click a chat to start conversation</span>
      </div>
    ):(
      <>
        <div className='flex flex-row justify-between md:justify-start p-4 bg-blue-200 rounded-md'>
        <span className='md:hidden' onClick={handleActiveChat}><ArrowBackIcon/></span>
        <Avatar className='mx-1' size='md' cursor='pointer' name={OtherUser?.name ?? "Sender User"} src={OtherUser?.image}/>
          <span className='hidden md:block mx-1 mt-3 font-semibold font-mono'>OtherUserName</span>
        </div>
        <div className='flex flex-col justify-end h-[80vh]'>
          <ScrollableChat/>
          <input className='border-2 border-gray-200 p-2 rounded-md' type='text' placeholder='Enter The Message'/>
        </div>
      </>
    )}
  </div>
  


  )
}

export default ActiveChat
