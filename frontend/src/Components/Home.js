import React, { useEffect, useState } from 'react'
import MainContainer from './MainContainer'
import axios from 'axios'
import MyConnection from './My Network/MyConnection'
import { postUser } from '../utlis/userSlice'

import { useDispatch, useSelector } from 'react-redux'
import { postPosts } from '../utlis/postSlice'
import { useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import fetchUserProfile from '../helper/fetchData'

const Home = () => {

const dispatch = useDispatch();
const [userData,setUserData] = useState(null) 
const navigate = useNavigate()


  useEffect(()=>{
    fetchUserProfile(setUserData);
  })

  const NavigateProfile = ()=>{
    navigate("/profile")
  }

  const getImage = (imgName) => {
    return require(`../public/${imgName}`);
};

  return (
    <>
    {/* screen division for large screen and above */}
    <div className='grid grid-cols-12 grid-flow-col mt-24'>
      <div className='hidden lg:block lg:col-span-2'></div>
      <div className='hidden md:block md:col-span-4 lg:col-span-3 m-2 -mt-1 '>
        <div className="flex flex-col rounded-2xl shadow-xl bg-gray-50 items-center mx-4">
          <img
            className="h-[100px] w-full rounded-xl"
            src={userData?.coverImage ? userData?.coverImage : "https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"}
            alt="cover Image"
          />    
          <div className="h-12 w-12 -mt-[580px] rounded-full" ></div>
          <img onClick={NavigateProfile}
            className="h-20 w-20 mt-[490px]  border-2 border-solid border-white rounded-full"
            src={userData?.image ? getImage(userData?.image) : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"}
            alt="dp"
          />
          <span className="font-mono font-bold text-xl -my-1">
            {userData?.name || "No name available"}
          </span>
          <span className=" font-mono  from-neutral-800 text-sm mb-2">
            { userData?.headline ?? "Headlines"}
          </span>
        </div>

        <MyConnection/>
      </div>

      <div className='hidden md:block md:col-span-8 md:mr-2  lg:col-span-5 h-[100vh]'>
        <MainContainer/>
      </div>
      <div className='hidden lg:block lg:col-span-2'></div>


    {/* for smaller screen */}
    
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    <div className='col-span-12 sm:col-span-10 md:hidden'>
      <MainContainer/>
    </div>
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    </div>


    </>
  )
}

export default Home
