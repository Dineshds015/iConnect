import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toggleProject } from '../../utlis/projectSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProjectForm = () => {
  
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleClick = ()=>{
    dispatch(toggleProject())
  }

  const submitProj = async(e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8000/project/create",{
      name:formData.name,
      description:formData.description,
      startDate:formData.sMonth+"-"+formData.sYear,
      endDate:formData.eMonth+"-"+formData.eYear
    })
        .then((res) => {
            console.log(res.data);
            toast.success("Happy Coding!");
            setTimeout(()=>{
              window.location.reload();
            },2000);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };
  const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());

  return (
    <div className={`bg-white shadow-2xl rounded-xl absolute top-96 left-1/2  sm:top-96 sm:left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-2 sm:w-2/3 md:1/2  xl:w-1/3 w-full`}>
      <div className='flex flex-row my-2 mx-2 justify-between border-b-2 py-1 px-2 border-zinc-300'>
        <button className='text-xl font-mono  from-neutral-800 font-bold '>Add Project</button>
        <button className='text-xl font-bold' onClick={handleClick}>X</button>
      </div>
      <div className='flex flex-col '>
        <span className='text-gray-500'>* Indicates required </span>

        <form className='flex flex-col m-2 text-gray-500'>

          <label className='m-1'>Title*</label>
          <input name="name" placeholder='Ex: Campus Connect' onChange={handleInputChange} className='rounded-md mb-2 border-2 border-black py-1 px-2' />

          <label className='m-1'>Description*</label>
          <textarea name="description" placeholder='Description' onChange={handleInputChange} className='h-40 rounded-md mb-2 border-2 border-black py-1 px-2 resize-none'/>
          

         <div className='flex flex-row '>
          <div className='w-1/2'>
            <label className='block m-1 '>Start Date*</label>
            <select name="sMonth" className='w-1/3 rounded-md py-1 px-2 border-2 mr-2 border-black ' onChange={handleInputChange}>
              <option  value=''>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select name="sYear" className='w-1/3 rounded-md py-1 px-2 border-2 border-black' onChange={handleInputChange}>
              <option value=''>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
           
          </div>

          <div className='w-1/2 mb-4'>
            <label className='block m-1'>End Date (or Expected)*</label>
            <select name="eMonth" className='w-1/3 rounded-md py-1 px-2 border-2 mr-2 border-black' onChange={handleInputChange}>
              <option  value=''>Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select name="eYear" className='w-1/3 rounded-md py-1 px-2 border-2 border-black' onChange={handleInputChange}>
              <option value=''>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
           
          </div>
          </div>
          <button className='border-2 border-blue-500  py-1 px-2 rounded-xl text-xl mb-1  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' onClick={submitProj}>Add project</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
