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
import Annoucement from './Announcement'
import Jobs from './Jobs'
import ProfileCard from './ProfileCard'

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
    <div className='grid grid-cols-12 grid-flow-col mt-[77px] bg-slate-200'>
      {/* <div className='hidden lg:blo xl:hidden'></div> */}


      <div className='hidden md:block md:col-span-4 lg:col-span-3  m-2 -mt-1 '>
       
        <ProfileCard/>
        <MyConnection />
      </div>

      <div className='hidden md:block md:col-span-8 md:mr-2  lg:col-span-5  h-[100vh]'>
        <MainContainer cType="media"/>
      </div>
      <div className=" pt-6 hidden lg:flex lg:col-span-4 h-[100vh] mr-4">
        <div className="w-1/2 mr-2">
            <div className="bg-blue-500 text-white font-bold rounded-lg p-4 mb-4 flex items-center justify-between">
            <a href="announcements" className="mr-2">Announcement</a>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
            <MainContainer cType="announcement" page="home"/>
        </div>
        <div className="w-1/2 ml-2">
            <div className="bg-blue-500 text-white font-bold rounded-lg p-4 mb-4 flex items-center justify-between">
            <a href="jobs" className="mr-2">Jobs</a>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
            <MainContainer cType="job" page="home"/>
        </div>  
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

export default Home
