import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toggleProject } from '../../utlis/projectSlice';

const ProjectForm = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [currentlyWorking,setCurrentlyWorking] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    dispatch(toggleProject)
    console.log("Submitting data:", data);
    
    // try {
    //   const response = await axios.post("http://localhost:8000/api/v1/users/projects", data, {
    //     withCredentials: true,
    //     // other options if needed
    //   });
  
    //   console.log("project response on post", response);
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
  }
  

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleClick = ()=>{
    dispatch(toggleProject())
  }

  const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());

  return (
    <div className={`bg-white shadow-2xl rounded-xl absolute top-96 left-1/2  sm:top-96 sm:left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-2 sm:w-2/3 md:1/2  xl:w-1/3 w-full`}>
      <div className='flex flex-row my-2 mx-2 justify-between border-b-2 py-1 px-2 border-zinc-300'>
        <button className='text-xl font-mono  from-neutral-800 font-bold '>Add Project</button>
        <button className='text-xl font-bold' onClick={handleClick}>X</button>
      </div>
      <div className='flex flex-col '>
        <span className='text-gray-500'>* Indicates required </span>

        <form className='flex flex-col m-2 text-gray-500' onSubmit={handleSubmit(onSubmit)}>

          <label className='m-1'>Title*</label>
          <input placeholder='Ex: Campus Connect' className='rounded-md mb-2 border-2 border-black py-1 px-2' {...register('title', { required: true })} />
          {errors.title && <p className='text-red-500'>Please Enter Your Title</p>}

          <label className='m-1'>Description*</label>
         <textarea placeholder='Description' className='h-40 rounded-md mb-2 border-2 border-black py-1 px-2 resize-none' {...register('desc',{required : true})} />
         {errors.desc && <p className='text-red-500 '>Please provide the description</p>}
          

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

          <div className='w-1/2 mb-4'>
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
                  
         

          <input className='border-2 border-blue-500  py-1 px-2 rounded-xl text-xl mb-1  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
