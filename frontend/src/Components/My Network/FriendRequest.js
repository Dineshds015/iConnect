import React,{useEffect,useState} from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import {Link} from 'react-router-dom';

const FriendRequestCard = ({user,panel}) => {

  const getImage = (imgName) => {
    return require(`../../public/${imgName}`);
  };

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
        
        <Link
          to={{
            pathname: `/${user._id}/Profile/`,
            state: { userId: user._id }
          }}
        >
        {/* <Link to={`${user._id}/Profile/`}> */}
        <div className='font-semibold'>{user.name ?? "No Name"}</div>
        <div className='text-sm font-thin'>{user.headline?? "No headline"}</div>
        </Link>
      </div>
      <div className='flex flex-row '>
        {
            panel==="request" ?
            (
              <div>
                <button className='border-2 border-green-500 px-2 py-1 rounded-3xl my-2 w-[60%] text-green-500 font-semibold hover:bg-green-200' onClick={handleAccept}><CheckIcon/></button>
                <button className='border-2 border-red-500 px-2 py-1 rounded-3xl mx-2 my-2 w-[60%] text-red-500 font-semibold hover:bg-red-200' onClick={handleReject}><ClearIcon/></button>
              </div>
            ):
            panel!=="searching"?
            <button className='border-2 border-red-500 px-2 py-1 rounded-3xl my-2 w-[60%] text-red-500 font-semibold hover:bg-red-200' onClick={handleReject}><ClearIcon/></button>:
            ""
        }
      </div>
    </div>
    )
}
const FriendRequest = ({search,panel}) => {

  const [users,setUsers]=useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Send request to backend to fetch userr profile
        let response;
        if(search){
          response = await axios.get('http://localhost:8000/connection/search', {
            params: {
              search:search
            }
          });
          console.log(response.data);
        }
        else{
          response = await axios.get('http://localhost:8000/connection/conManage', {
            params: {
              panel: panel
            }
          });
        }
        setUsers(response.data); // Update state with userr information
        console.log("ressData",response.data);
      } catch (error) {
        console.error('Error fetching userr profile:', error);
      }
    };
    fetchUserProfile();
    //console.log(userr.image);
  }, [search]);

    
  return (
    <>
    {users ? (
  panel === "request" ? (
    <div className='py-2 px-6 font-bold bg-blue-50'>Connection Request</div>
  ) : panel === "sent" ? (
    <div className='py-2 px-6 font-bold bg-blue-50'>Connection Sent</div>
  ) : null  // Add null here to print nothing when panel is "searching"
) : (
  <div className='mx-4 p-2 font-bold'>No Connection pending</div>
)}
    <div className={`bg-blue-50 rounded-lg}`}>
    
        {users && users.map((user,idx)=>(
            <FriendRequestCard panel={panel} key={idx} user={user} /> // user id as key
        ))}
    </div>
    </>
  )
}

export default FriendRequest
