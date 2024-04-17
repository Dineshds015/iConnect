import React, { useEffect, useState } from 'react'
import axios from 'axios'
import pen from "../public/pen.png"
// import mnc from "../public/mnc.png"
import { useDispatch } from 'react-redux'
import { toggleExperience } from '../utlis/experienceSlice'



const Experience = ({userId}) => {

  const [userExperience,setUserExperience] = useState([])
  const dispatch = useDispatch()

  const fetchData = async()=>{

    // fetch user exp
   
   // setUserExperience(response.data.data)

  }

  const handleClick = ()=>{
    dispatch(toggleExperience())
  }

  useEffect(()=>{
    fetchData();
  },[])
  // if(!exp)
  return (
    <div className=' '>
       <div className='flex justify-between mx-4 mt-2 mb-1 '>
        <span className='font-bold text-xl mb-2'>Experience</span>
        <div className='flex flex-row '>
          <span className='mx-2 font-mono font-semibold text-2xl' onClick={handleClick}>+</span>
          <img className='h-6 w-6 mx-2 mt-1' src={pen} alt="Pen icon"/>
        </div>
      </div>
      
      {userExperience.map((data, index) => (
        <div key={index} className={`flex flex-row ${index !== userExperience.length - 1 ? 'border-b-4 m-2' : 'm-2'}`}>
          <img className='rounded-full h-16 mr-2' src="" alt="Institute logo" />
          <div className='flex flex-col'>
            <span className='font-bold text-[15px]'>{data.companyName??"Google"}</span>
            <span className='text-[15px]'>{data.title??"SDE-1"}</span>
            <span>{data.employmentType??"Full-Time"}</span>
            <span className='mb-4'>{`${data.startMonth??"2"} ${data.startYear??"2021"} - ${data.endMonth??"6"} ${data.endYear??"2024"}`}</span>
          </div>
        </div> 
      ))} 

      
    </div>
  )
}

export default Experience
