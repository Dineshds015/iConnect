import React,{useState,useEffect} from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const FriendListItem = ({user}) =>{
  const getImage = (imgName) => {
    return require(`../../public/${imgName}`);
  };

    return (
    <div className='flex flex-row justify-between mx-4 p-2 bg-gray-50 border-b-2 border-gray-200 items-center'>
      <div className='flex flex-row'>
        <img className='h-12 w-12' src={user.image?getImage(user.image) : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="dp"/>
        <div className='flex flex-col mx-2'>
            <span className='font-semibold'>{user.name ?? "No Name"}</span>
            <span className='text-sm font-thin'>{user.headline?? "No headline"}</span>
        </div>
      </div>
      
        <button className='border-2 border-solid border-blue-500 rounded-2xl md:p-1 p-1 px-2 '><SendIcon/></button>
      
    </div>
    )
}
const MyConnection = () => {

    const [users,setUsers]=useState([]);
    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get('http://localhost:8000/connection/myConnection');
          setUsers(response.data); // Update state with userr information
          console.log("ressData",response.data);
        } catch (error) {
          console.error('Error fetching userr profile:', error);
        }
      };
      fetchUserProfile();
      //console.log(userr.image);
    }, []);

    
  return (
    <div className='flex flex-col bg-gray-50 shadow-md m-4 overflow-x-hidden overflow-y-auto'>
    <div className='flex flex-row justify-between'>
      <span className='m-2 font-bold'>Connections</span>
      <span className='m-2'><ArrowRightAltIcon/></span>
    </div>
    {users && users.map((user,idx)=>(
            <FriendListItem key={idx} user={user} /> // user id as key
        ))}
  </div>
  )
}

export default MyConnection
