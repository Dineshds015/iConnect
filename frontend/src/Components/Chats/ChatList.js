import React from 'react'
import ChatItem from './ChatItem'
import SearchIcon from '@mui/icons-material/Search';
const ChatList = () => {

  const activeChat = false;
  return (
    <div className={`${activeChat? 'hidden' : 'col-span-12'} md:block md:col-span-5 lg:col-span-4 mx-4 mt-24 h-[90vh] bg-gray-50 overflow-x-hidden overflow-y-scroll`}>
      <div className='mx-4 my-2 border-b-2'>
        <input className='border-2 border-gray-200 px-2 rounded-2xl py-1 w-[80%]' type="text" placeholder='Search message'></input>
        <button className='ml-1 mb-4'><SearchIcon/></button>
      </div>
        <ChatItem userName={"Siddhart Jaiswal"} msg={"hello"} time={"9:30PM"} />
        <ChatItem userName={"John Doe"} msg={"Hey there!"} time={"10:00AM"} />
        <ChatItem userName={"Alice"} msg={"How are you?"} time={"1:45PM"} />
        <ChatItem userName={"Bob"} msg={"Good morning!"} time={"8:15AM"} />
        <ChatItem userName={"Emily"} msg={"Nice weather today"} time={"11:20AM"} />
        <ChatItem userName={"David"} msg={"I'm busy right now"} time={"3:00PM"} />
        <ChatItem userName={"Sarah"} msg={"What's up?"} time={"2:30PM"} />
        <ChatItem userName={"Michael"} msg={"See you later"} time={"5:10PM"} />
        <ChatItem userName={"Olivia"} msg={"This is great!"} time={"6:40PM"} />
        <ChatItem userName={"Ethan"} msg={"How's your day going?"} time={"4:25PM"} />

    </div>
  )
}

export default ChatList
