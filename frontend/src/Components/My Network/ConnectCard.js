import React,{useEffect,useState} from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ConnectCard = ({ user }) => {

  const getImage = (imgName) => {
    return require(`../../public/${imgName}`);
  };

  const [requestSent,setRequestSent]=useState(false);

  const handleCancelRequest=async()=>{
    axios.post("http://localhost:8000/connection/cancel",{
      connectionUserId:user._id
    })
        .then((res) => {
            console.log(res.data);
            toast.warning("Connection cancelled!");
            setRequestSent(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }
  //handle cancel request
  const handleSendRequest=async()=>{
    axios.post("http://localhost:8000/connection/create",{
      connectionUserId:user._id
    })
        .then((res) => {
            console.log(res.data);
            toast.success("Sent connection!");
            setRequestSent(true);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  return (
    <div className='flex flex-col justify-center items-center m-2 rounded-xl bg-blue-50 w-[45%] sm:ml-6 md:ml-2 xl:w-[30%]'>
      <img className='h-24 w-full rounded-xl' src={user?.coverImage ?? "https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"} alt="cover image"/>
      <img className='h-14 w-14 -mt-7 border-2 border-solid border-white rounded-full' src={user.image?getImage(user.image) : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="dp"/>
      <Link
          to={{
            pathname: `/${user._id}/Profile/`,
            state: { userId: user._id }
          }}
        >
        {/* <Link to={`${user._id}/Profile/`}> */}
        <div className='font-semibold'>{user?.name ?? "No Name"}</div>
        <div className='text-sm -mt-1 font-serif'>{user?.headline?.substring(0, 10)+"..." ?? "Headline"}</div>
      </Link>
      {/* <span className='font-semibold'>{user?.name ?? "No Name"}</span>
      <span className='text-sm -mt-1 font-serif'>{user?.headline?.substring(0, 10)+"..." ?? "Headline"}</span> */}
      {!requestSent && <button className='border-2 border-blue-500 px-2 py-1 rounded-3xl my-2 w-[60%] text-blue-500 font-semibold hover:bg-blue-200' onClick={handleSendRequest}><PersonAddAltIcon/> Connect</button>}
      {requestSent && <button className='border-2 border-red-500 px-2 py-1 rounded-3xl my-2 w-[60%] text-red-500 font-semibold hover:bg-red-200' onClick={handleCancelRequest}><CloseIcon/> Cancel</button>}
    </div>
  );
};

export default ConnectCard;
