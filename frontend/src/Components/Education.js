import React, { useEffect, useState } from 'react';
import pen from "../public/pen.png";
import { useDispatch } from 'react-redux';
import {  toggleEducation } from '../utlis/educationSlice';
import axios from 'axios';

const Education = ({userId}) => {
  const dispatch = useDispatch()
  const [userEducation,setUserEducation] = useState([])

  // const fetchData = async() => {

  
  //   // if(userEducation.length) return;
  //   const response = await axios.get(`http://localhost:8000/api/v1/users/${userId}/getUserEducation`,{
  //       withCredentials: true
  //     })
     
  //     setUserEducation(response.data.data)
  // }

  const handleClick = ()=>{
    dispatch(toggleEducation())
  }

  // useEffect(()=>{
  //   fetchData()
  // },[])
  return (
    <div className=''>
      <div className='flex justify-between mx-4 mt-2 mb-1'>
        <span className='font-bold text-xl'>Education</span>
        <div className='flex flex-row '>
          <span className='mx-2 font-mono font-semibold text-2xl' onClick={handleClick}>+</span>
          <img className='h-6 w-6 mx-2 mt-1' src={pen} alt="Pen icon"/>
        </div>
      </div>

      {userEducation.map((data, index) => (
          <div key={index} className={`flex flex-row ${index !== userEducation.length - 1 ? 'border-b-4 m-2' : 'm-2'}`}>
          <img className='rounded-full h-16 mr-2' src="https://png.pngtree.com/png-vector/20230306/ourmid/pngtree-scool-college-logo-victor-vector-png-image_6634445.png" alt="Institute logo" />
          <div className='flex flex-col'>
            <span className='font-bold text-[15px]'>{data.institute?? "Motilal Nehru National Institute of Technology"}</span>
            <span className='text-[15px]'>{data.degree??"Master's of Computer Application"}</span>
            <span>{data.fieldOfStudy?? "Computer Science"}</span>
            <span>{`${data.startMonth?? "2"} ${data.startYear??"2021"} - ${data.endMonth??"6"} ${data.endYear??"2024"}`}</span>
            <span className='mb-4'>{`Grade: 8.5 SPI`}</span>
          </div>
        </div> 
      ))}

    </div>
  );
};

export default Education;
