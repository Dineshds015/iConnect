import React, { useEffect, useState } from 'react'
import MainContainer from './MainContainer'
import axios from 'axios'
import MyConnection from './My Network/MyConnection'
import { postUser } from '../utlis/userSlice'

import { useDispatch, useSelector } from 'react-redux'
import { postPosts } from '../utlis/postSlice'
import { useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {fetchUserProfile,logoutUser} from '../helper/fetchData'
//import Annoucement from './Announcement/Announcement'
//import Jobs from './Jobs/Jobs'
import ProfileCard from './ProfileCard'

const Jobs = () => {

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
    <div className='grid grid-cols-12 grid-flow-col mt-[77px] bg-slate-200'>
      {/* <div className='hidden lg:blo xl:hidden'></div> */}


      <div className='hidden md:block md:col-span-4 lg:col-span-3  m-2 -mt-1 '>
        <ProfileCard/>
        <MyConnection />
      </div>

      <div className='hidden md:block md:col-span-8 md:mr-2  lg:col-span-5  h-[100vh]'>
        <MainContainer cType="job"/>
      </div>





    {/* for smaller screen */}
    
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    <div className='col-span-12 sm:col-span-10 md:hidden'>
        <ProfileCard/>
        <div className='w-full'>
          <MainContainer/>
        </div>
    </div>
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    </div>


    </>  )
}

export default Jobs;
