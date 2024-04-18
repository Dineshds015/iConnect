import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const FriendRequestCard = ({user}) => {
    return (
    <div className='flex flex-row justify-between mx-4 p-2 bg-gray-50 border-b-2 border-gray-200 '>
      <div className='flex flex-row'>
        <img className='h-12 w-12' src={user.image ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="dp"/>
        <div className='flex flex-col mx-2'>
            <span className='font-semibold'>{user.name ?? "No Name"}</span>
            <span className='text-sm font-thin'>{user.headline?? "No headline"}</span>
        </div>
      </div>
      <div className='flex flex-row '>
        <span className='border-2 border-solid border-red-700 rounded-full p-1 m-2'><ClearIcon/></span>
        <span className='border-2 border-solid border-green-400 rounded-full p-1 m-2'><CheckIcon/></span>
      </div>
    </div>
    )
}
const FriendRequest = () => {
    const users = [
        {
          name: "John Doe",
          headline: "Software Engineer"
        },
        {
          name: "Alice Smith",
          
          headline: "Graphic Designer"
        },
        {
          name: "Bob Johnson",
          
          headline: "Data Analyst"
        },
        {
          name: "Emily Davis",
          
          headline: "Marketing Manager"
        },
        {
          name: "Michael Wilson",
          headline: "Product Manager"
        },
        {
          name: "Olivia Martinez",
          
          headline: "UI/UX Designer"
        },
        {
          name: "Ethan Taylor",
          
          headline: "Web Developer"
        },
        {
          name: "Sophia Anderson",
         
          headline: "Content Writer"
        },
        {
          name: "Noah Clark",
          headline: "SEO Specialist"
        },
        {
          name: "Ava Baker",
         
          headline: "Project Manager"
        }
      ];
  return (
    <>
    {users ? (<div className='py-2 px-6 font-bold bg-blue-50 '>Connection Request</div>) : (<div className='mx-4 p-2 font-bold'>No Pending Request</div>)}
    <div className={`bg-blue-50 rounded-lg}`}>
    
        {users && users.map((user,idx)=>(
            <FriendRequestCard key={idx} user={user} /> // user id as key
        ))}
    </div>
    </>
  )
}

export default FriendRequest
