import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const ConnectCard = ({ user }) => {
  return (
    <div className='flex flex-col justify-center items-center m-2 rounded-xl bg-blue-50 w-[45%] sm:ml-6 md:ml-2 xl:w-[30%]'>
      <img className='h-24 w-full rounded-xl' src={user?.coverImage ?? "https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"} alt="cover image"/>
      <img className='h-14 w-14 -mt-7 border-2 border-solid border-white rounded-full' src={user?.image ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="dp"/>
      <span className='font-semibold'>{user?.name ?? "No Name"}</span>
      <span className='text-sm -mt-1 font-serif'>{user?.headline?.substring(0, 10)+"..." ?? "Headline"}</span>
      <button className='border-2 border-blue-500 px-2 py-1 rounded-3xl my-2 w-[60%] text-blue-500 font-semibold hover:bg-blue-200'><PersonAddAltIcon/> Connect</button>
    </div>
  );
};

export default ConnectCard;
