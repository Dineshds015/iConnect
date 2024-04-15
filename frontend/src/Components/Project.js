import React, { useEffect, useState } from 'react'
import pen from "../public/pen.png"
import {useDispatch } from 'react-redux'
import axios from 'axios'
import { toggleProject } from '../utlis/projectSlice'
const Project = ({userId}) => {


    const [userProject,setUserProject] = useState([])
    const dispatch = useDispatch()
    // const userProject = useSelector((store)=>store.project.project)

    // const fetchData = async()=>{
    //   // if(userProject.length) return;
    //   const projectData = await axios.get(`http://localhost:8000/api/v1/users/${userId}/getUserProjects`,{
    //     withCredentials: true
    //   })
      
    //   // dispatch(postProject(projectData?.data?.data))
    //   console.log("project",projectData)
    //   setUserProject(projectData.data.data)
    //   console.log("userProject",userProject)

    // }

    const handleClick = ()=>{
      dispatch(toggleProject())
    }

    // useEffect(()=>{
    //   fetchData();
    // },[])

  return (
    <div className=' '>
       <div className='flex justify-between mx-4 mt-2 mb-1 '>
        <span className='font-bold text-xl '>Projects</span>
        <div className='flex flex-row '>
          <span className='mx-2 font-mono font-semibold text-2xl' onClick={handleClick}>+</span>
          <img className='h-6 w-6 mx-2 mt-1 ' src={pen} />  
        </div>
      </div>
      {userProject.map((data, index) => (
  <div key={index} className={`flex flex-row ${index !== userProject.length - 1 ? 'border-b-4 m-2' : 'm-2'}`}>
    {/* <img className='rounded-full h-20 m-4' src="https://e7.pngegg.com/pngimages/174/212/png-clipart-logo-internet-company-service-multinational-corporation-company-service.png" alt="Institute logo" /> */}
    <div className='flex flex-col'>
      <span className='font-bold text-[15px] mx-4 mb-4'>{data.title}</span>
      <span className='text-[15px] mx-4 '>{data.desc}</span>
      {/* <span>{data.employmentType}</span> */}
      <span className='mx-4 mt-4 mb-4'>{`${data.startMonth} ${data.startYear} - ${data.endMonth} ${data.endYear}`}</span>
      {/* <span className='mb-6'>{`Grade: 8.5 SPI`}</span> */}
    </div>
  </div>
))} 

    </div>
  )
}

export default Project


