import React,{useEffect,useState} from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

const FriendRequestCard = ({user}) => {

  const getImage = (imgName) => {
    return require(`../../public/${imgName}`);
  };

  useEffect(()=>{
    handleAccept();
    handleReject();
  })
  const handleAccept=async()=>{
    axios.post("http://localhost:8000/connection/accept",{
      connectionUserId:user._id,
    })
    .then((res) => {
          console.log("Request accepted",res.data);
          //toast.success("Sent connection!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleReject=async()=>{
    axios.post("http://localhost:8000/connection/cancel",{
      connectionUserId:user._id,
    })
    .then((res) => {
          console.log("Request Rejected",res.data);
          //toast.success("Sent connection!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


    return (
    <div className='flex flex-row justify-between mx-4 p-2 bg-gray-50 border-b-2 border-gray-200 '>
      <div className='flex flex-row'>
        <img className='h-12 w-12' src={user?.image ? getImage(user?.image) : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="dp"/>
        <div className='flex flex-col mx-2'>
            <span className='font-semibold'>{user.name ?? "No Name"}</span>
            <span className='text-sm font-thin'>{user.headline?? "No headline"}</span>
        </div>
      </div>
      <div className='flex flex-row '>
        <button className='border-2 border-green-500 px-2 py-1 rounded-3xl my-2 w-[60%] text-green-500 font-semibold hover:bg-green-200' onClick={handleAccept}><CheckIcon/></button>
        <button className='border-2 border-red-500 px-2 py-1 rounded-3xl mx-2 my-2 w-[60%] text-red-500 font-semibold hover:bg-red-200' onClick={handleReject}><ClearIcon/></button>
      </div>
    </div>
    )
}
const FriendRequest = () => {

  const [users,setUsers]=useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Send request to backend to fetch userr profile
        const response = await axios.get('http://localhost:8000/connection/conRequest');
        setUsers(response.data); // Update state with userr information
        console.log("ressData",response.data);
      } catch (error) {
        console.error('Error fetching userr profile:', error);
      }
    };
    fetchUserProfile();
    //console.log(userr.image);
  }, []);

    // const users = [
    //     {
    //       name: "John Doe",
    //       headline: "Software Engineer"
    //     },
    //     {
    //       name: "Alice Smith",
          
    //       headline: "Graphic Designer"
    //     },
    //     {
    //       name: "Bob Johnson",
          
    //       headline: "Data Analyst"
    //     },
    //     {
    //       name: "Emily Davis",
          
    //       headline: "Marketing Manager"
    //     },
    //     {
    //       name: "Michael Wilson",
    //       headline: "Product Manager"
    //     },
    //     {
    //       name: "Olivia Martinez",
          
    //       headline: "UI/UX Designer"
    //     },
    //     {
    //       name: "Ethan Taylor",
          
    //       headline: "Web Developer"
    //     },
    //     {
    //       name: "Sophia Anderson",
         
    //       headline: "Content Writer"
    //     },
    //     {
    //       name: "Noah Clark",
    //       headline: "SEO Specialist"
    //     },
    //     {
    //       name: "Ava Baker",
         
    //       headline: "Project Manager"
    //     }
    //   ];
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
