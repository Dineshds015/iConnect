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
import Post from './Post'
import fetchPost from '../helper/fetchPost'

const Jobs = () => {


  const [userPosts,setUserPosts] = useState(false)
  const [postData,setPostData]=useState([]);

  useEffect(()=>{
      fetchPost(setPostData,"job");
      setUserPosts(true);
  },[]);

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
    <div className='grid grid-flow-col grid-cols-12 mt-20 bg-slate-200 h-[100vh] '>
    <div className='hidden md:block md:col-span-4 xl:hidden ' >
        <ProfileCard/>
        <MyConnection/>
    </div>
    <div className='hidden xl:block xl:col-span-1 '></div>
    <div className='hidden xl:block xl:col-span-3  2xl:col-span-3' >
        <ProfileCard/>
        <MyConnection/>
    </div>
    
    <div className='col-span-12 md:col-span-8 xl:col-span-7 2xl:col-span-7 flex flex-col m-4 h-full bg-slate-200 rounded-xl '> 
    
    <div className='flex flex-row bg-white justify-between font-bold text-xl rounded-xl mt-2 -mb-1 p-2'>
        <span>Job Opportunities</span>
        {/* <span className='cursor-pointer' onClick={()=>navigate("/announcements")}><ArrowRightAltIcon/></span> */}
    </div>
    <div className='h-[95vh] overflow-x-hidden overflow-y-auto'>
    {postData.map((data,idx) =>
        {    
            return <Post cType="announcement" key={data._id} postData={data}/>  // Don't render this post
        }   
    )}
    </div>
   
    </div>

    <div className='hidden md:block md:col-span-1 xl:col-span-2 2xl:col-span-2' ></div>
    </div>
  )}

export default Jobs;
