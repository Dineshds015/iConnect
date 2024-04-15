import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  toggleEducation } from '../../utlis/educationSlice'; 

const Educationform = () => {
  const dispatch = useDispatch()


  
  const { register, handleSubmit, formState: { errors } } = useForm();


//   const onSubmit = async (data) => {
//     dispatch(toggleEducation())
//     const response = await axios.post("http://localhost:8000/api/v1/users/Education", data, {
//         withCredentials: true, // Set the withCredentials option to true
//         // other options if needed
//       });
//       // dispatch(postEducation(response.data.data))
//       // console.log("Education",response)
//   }

  const handleClick = ()=>{
    dispatch(toggleEducation())
  }

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());

  return (
    <div className={`bg-white shadow-2xl rounded-xl absolute top-96 left-1/2  sm:top-96 sm:left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-2 sm:w-2/3 md:1/2  xl:w-1/3 w-full`}>
      <div className='flex flex-row my-2 mx-2 justify-between border-b-2 p-1 border-zinc-300'>
        <button className='text-xl font-mono  from-neutral-800 font-bold '>Add Education</button>
        <button className='text-xl font-bold' onClick={handleClick}>X</button>
      </div>
      <div className='flex flex-col '>
        <span className=' text-gray-500'>* Indicates required </span>

        <form className='flex flex-col m-2 text-gray-500' onSubmit={handleSubmit(onSubmit)}>
          <label className='mx-1'>Institute*</label>
          <input placeholder='Ex: MNNIT' className='rounded-md mb-2 border-2 border-black py-1 px-2' {...register('institute', { required: true })} />
          {errors.institute && <p className='text-red-500 '>Please Enter the Institute Name</p>}

          <label className='m-1 '>Degree</label>
          <input placeholder="Ex: Master's" className='rounded-md mb-2 border-2 border-black py-1 px-2' type='text' {...register('degree')} />

          <label className='m-1 '>Field of Study</label>
          <input placeholder="Ex: Computer Science" className=' rounded-md mb-2 border-2 border-black py-1 px-2' type='text' {...register('fieldOfStudy')} />

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
                  
          <label className='m-1 '>Grade</label>
          <input placeholder='grade' className='rounded-md border-2 border-black py-1 px-2 mb-4' type='text' {...register('grade')} />  
          <input className='border-2 border-blue-500 py-1 px-2 rounded-xl mb-1  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default Educationform;
