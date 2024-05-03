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
    try {
      const response = await axios.get('http://localhost:8000/experience/fetchExperience',{
        params:{
          userId:userId
        }
      });
      setUserExperience(response.data.experiences);
      //console.log("exp by res: ",response.data.experiences);
    } catch (error) {
      console.error('Error fetching user Experience:', error);
    }
  }
  // useEffect(() => {
  //   console.log("exp by useeffect: ",userExperience);
  // }, [userExperience]);

  useEffect(()=>{
    fetchData();
  },[userId]);

  const handleClick = ()=>{
    dispatch(toggleExperience())
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  // if(!exp)
  return (
    <div className=' '>
       <div className='flex justify-between mx-4 mt-2 mb-1 '>
        <span className='font-bold text-xl mb-2'>Experience</span>
        {/* <div className='flex flex-row '>
          <span className='mx-2 font-mono font-semibold text-2xl cursor-pointer' onClick={handleClick}>+</span>
          <img className='h-6 w-6 mx-2 mt-1' src={pen} alt="Pen icon"/>
        </div> */}
      </div>
      
      {userExperience.map((data, index) => (
        <div key={index} className={`flex flex-row ${index !== userExperience.length - 1 ? 'border-b-4 m-2' : 'm-2'}`}>
          <img className='rounded-full h-16 mr-2' src="" alt="Institute logo" />
          <div className='flex flex-col'>
            <span className='font-bold text-[15px]'>{data.companyName??"Google"}</span>
            <span className='text-[15px]'>{data.position??"SDE-1"}</span>
            <span>{data.employmentType??"Full-Time"}</span>
            <span className='mb-4'>{`${formatDate(data.startDate)??"2"} - ${formatDate(data.endDate)??"6"}`}</span>
          </div>
        </div> 
      ))} 

      
    </div>
  )
}

export default Experience
