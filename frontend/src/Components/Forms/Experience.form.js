import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { toggleExperience } from '../../utlis/experienceSlice';
import { useDispatch } from 'react-redux';

const ExperienceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [currentlyWorking,setCurrentlyWorking] = useState(false)
  const dispatch = useDispatch()

//   const onSubmit = async (data) => {
//     dispatch(toggleExperience())
//     const response = await axios.post("http://localhost:8000/api/v1/users/Experience", data, {
//         withCredentials: true, // Set the withCredentials option to true
//         // other options if needed
//       });

      // dispatch(postExperience(response.data.data))
  }

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  // const handleCurrentlyWorking = (e)=>{
  //   setCurrentlyWorking(e.target.checked)
  // }
  const handleClick = ()=>{
    dispatch(toggleExperience())
  }

  const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());

  return (
    <div className={`bg-white shadow-2xl rounded-xl absolute top-[440px] left-1/2  sm:top-[440px] sm:left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-2 sm:w-2/3 md:1/2  xl:w-1/3 w-full`}>
      <div className='flex flex-row my-2 mx-2 justify-between border-b-2 p-1 border-zinc-300'>
        <button className='text-xl font-mono  from-neutral-800 font-bold '>Add Experience</button>
        <button className='text-xl font-bold' onClick={handleClick}>X</button>
      </div>
      <div className='flex flex-col '>
        <span className=' text-gray-500'>* Indicates required </span>

        <form className='flex flex-col m-2 text-gray-500' onSubmit={handleSubmit(onSubmit)}>
        <label className='m-1'>Title*</label>
          <input placeholder='Ex: Retails Sales Manager' className='rounded-md mb-2 border-2 border-black py-1 px-2' {...register('title', { required: true })} />
          {errors.title && <p className='text-red-500 '>Please Enter Your Title</p>}

          <label className='m-1'>Employment Type*</label>
          <select className='rounded-md mb-2 border-2 border-black py-1 px-2' {...register('employmentType', { required: true })}>
            <option value='' key='defaultOption'>Please Select</option>
            <option value='Full Time' key='fullTimeOption'>Full Time</option>
            <option value='Part Time' key='partTimeOption'>Part Time</option>
            <option value='Self Employed' key='selfEmployedOption'>Self Employed</option>
            <option value='Freelance' key='freelanceOption'>Freelance</option>
            <option value='Internship' key='internshipOption'>Internship</option>
            <option value='Trainee' key='traineeOption'>Trainee</option>
          </select>
          {errors.employmentType && <p className='text-red-500 '>Enter Your Employment Type</p>}


          <label className='m-1 text-2xl'>Company Name</label>
          <input placeholder="Ex: Microsoft" className='rounded-md mb-2 border-2 border-black py-1 px-2' type='text' {...register('companyName',{required: true})} />
          {errors.companyName && <p className='text-red-500 '>Enter The Company Name</p>}
          
          <label className='m-1 text-2xl'>Location</label>
          <input placeholder="Ex: New York" className='rounded-md mb-2 border-2 border-black py-1 px-2' type='text' {...register('location', { required: true })} />
          {errors.location && <p className='text-red-500 '>Enter the Location</p>}

          <label className='block m-1'>Location*</label>
          <select className='rounded-md mb-2 border-2 border-black py-1 px-2' {...register('locationType', { required: true })}>
            <option value='' key='defaultLocationOption'>Please Select</option>
            <option value='On-Site' key='cityOption'>On-Site</option>
            <option value='Hybrid' key='Hybrid'>Hybrid</option>
            <option value='Remote' key='remoteOption'>Remote</option>
          </select>        
          {errors.locationType && <p className='text-red-500 '>Enter Your Location Type</p>}

          {/* <label className='block m-1 text-2xl'>Currently Working*</label> */}
          
          
 


          <div className='flex flex-row '>
          <div className='w-1/2'>
            <label className='block m-1 '>Start Date*</label>
            <select className='w-1/3 rounded-md py-1 px-2 border-2 mr-2 border-black ' {...register('startMonth', { required: true })}>
              <option  value=''>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select className='w-1/3 rounded-md py-1 px-2 border-2 border-black' {...register('startYear', { required: true })}>
              <option value=''>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {(errors.startMonth || errors.startYear) && <p className='text-red-500 '>Enter the Start Date </p>}
           
          </div>

          <div className='w-1/2'>
            <label className='block m-1'>End Date (or Expected)*</label>
            <select className='w-1/3 rounded-md py-1 px-2 border-2 mr-2 border-black' {...register('endMonth', { required: true })}>
              <option  value=''>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select className='w-1/3 rounded-md py-1 px-2 border-2 border-black' {...register('endYear', { required: true })}>
              <option value=''>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {(errors.endMonth || errors.endYear) && <p className='text-red-500 '>Enter the End Date </p>}
           
          </div>
          </div>
                  
          <label className='m-1 '>Industry*</label>
          <input placeholder='Industry*' className='rounded-md border-2 border-black py-1 px-2 mb-4' type='text' {...register('industry',{required: true})} />  



          <input className='border-2 border-blue-500 py-1 px-2 rounded-xl mb-1  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' />
        </form>
      </div>
    </div>
  );
};

  
export default ExperienceForm;

