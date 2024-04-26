import React, { useEffect, useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import { useParams } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import YourPost from './YourPost';

const OtherUserProfile = () => {
  
//   const [userData,setUserdata] = useState()
  const {user_id} = useParams()

  console.log("other",user_id)
  

  const fetchData = async () => {
   
    // fetch other user details using their Id, check app.js for params
    // all append the user details with connection field => status true/false.
  };


  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) return null;

  return (
    <div className="grid grid-cols-12 grid-flow-col">
      <div className="hidden xl:block  xl:col-span-1 mx-4"></div>

      {/* 1st col span  */}
      <div className="hidden md:block md:col-span-5 xl:col-span-4 mx-2 mt-[140px]">
        <div className="flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 -mt-10">
          <Education userId={userData?._id} />
        </div>
        <div className="flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Experience userId={userData?._id} />
        </div>
        <div className="flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Project userId={userData?._id} />
        </div>
      </div>

      {/* main span */}
      <div className={`col-span-12 md:block md:col-span-7 xl:col-span-6 flex flex-col mt-24 md:mx-2`}>
        <div className="flex flex-col rounded-2xl shadow-xl bg-white">
          <img
            className="h-[200px] w-full rounded-xl"
            src={userData?.coverImage ? userData?.coverImage : "https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"}
            alt="cover Image"
          />          
          <div className="h-16 w-16 -mt-[580px] rounded-full"></div>
          <img
            className="h-28 w-28 mt-[470px] ml-4 border-2 border-solid border-white rounded-full cursor-pointer"
            src={userData?.avatar ? userData?.avatar : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"}
            alt="dp"
          />
          <span className="font-mono font-bold text-xl ml-5"> 
            {userData?.fullName}
          </span>
            {/* <img className='h-5 w-5 absolute top-[360px] right-8 xl:right-40 2xl:right-60 cursor-pointer' />   */}
          <span className=" font-mono my-1 from-neutral-800 ml-5">
            {userData?.headline }
          </span>
          {userData.connected ?
           (<button className="w-[95%] p-2 mx-4 my-1 mb-2 bg-white border border-blue-500 text-blue-500 font-bold rounded-2xl hover:bg-blue-500 hover:border-white hover:text-white">
            Message
          </button>) : 
          (<button className="w-[95%] p-2 mx-4 my-1 mb-2 bg-white border border-blue-500 text-blue-500 font-bold rounded-2xl hover:bg-blue-500 hover:border-white hover:text-white">
            <PersonAddAltIcon/> Connect
          </button>
          )}
        </div>

        <div className="md:hidden flex flex-col rounded-2xl shadow-xl bg-gray-50 mt-2">
          <Education userId={userData?._id} />
        </div>
        <div className="md:hidden flex flex-col rounded-2xl shadow-xl bg-gray-50 mt-2">
          <Experience userId={userData?._id} />
        </div>
        <div className="md:hidden flex flex-col rounded-2xl shadow-xl  bg-gray-50 mt-2">
          <Project userId={userData?._id} />
        </div>
      </div>
      <div className="hidden xl:block  xl:col-span-1 mx-4"></div>
    </div>
  );
};

export default OtherUserProfile;