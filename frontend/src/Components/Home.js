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
import SideContainer from './SideContainer'

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



      <div className='hidden lg:block lg:col-span-4  h-[100vh]'>

      <div className='flex flex-col mt-5 mx-4  bg-white rounded-xl  '> 
        <div className='flex flex-row justify-between font-bold text-xl mx-4 p-2 '>
            <span>Announcements</span>
            <span className='cursor-pointer' onClick={()=>navigate("/announcements")}><ArrowRightAltIcon/></span>
        </div>
        <div className='h-auto px-2 pt-2 -mt-5'>
            <SideContainer cType="announcement" page="home"/>
        </div>
        <span className='flex mt-2 text-blue-600 font-bold py-2 bg-gray-100 items-center justify-center cursor-pointer hover:text-lg' onClick={()=>navigate("/announcements")}>See All</span>
        </div>

        <div className='flex flex-col  mt-5 m-4 bg-white rounded-xl  '> 
        <div className='flex flex-row justify-between font-bold text-xl mx-4 p-2'>
            <span>Job Opportunities</span>
            <span className='cursor-pointer' onClick={()=>navigate("/jobs")}><ArrowRightAltIcon/></span>
        </div>
        <div className='h-auto p-2 -mt-5'>
        <SideContainer cType="job" page="home"/>
        </div>
        <span className='flex mt-2 text-blue-600 font-bold py-2 bg-gray-100 items-center justify-center cursor-pointer hover:text-lg' onClick={()=>navigate("/jobs")}>See All</span>
        </div>
   
    </div>




        {/* <MainContainer cType="announcement" page="home"/>
        <MainContainer cType="job" page="home"/> */}
      </div>


    {/* for smaller screen */}
    
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    <div className='col-span-12 sm:col-span-10 md:hidden'>
        <ProfileCard/>
        <MainContainer cType="media"/>
    </div>
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    {/* </div> */}


    </>  )
}

export default Home
