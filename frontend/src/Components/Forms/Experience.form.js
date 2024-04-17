import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toggleExperience } from '../../utlis/experienceSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const ExperienceForm = () => {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch()

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleClick = ()=>{
    dispatch(toggleExperience())
  }
  
  const submitExp = async(e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8000/experience/create",{
      position:formData.position,
      companyName:formData.company,
      startDate:formData.sMonth+"-"+formData.sYear,
      endDate:formData.eMonth+"-"+formData.eYear,
      description:formData.description
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
    <div className={`bg-white shadow-2xl rounded-xl absolute top-[440px] left-1/2  sm:top-[440px] sm:left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-2 sm:w-2/3 md:1/2  xl:w-1/3 w-full`}>
      <div className='flex flex-row my-2 mx-2 justify-between border-b-2 p-1 border-zinc-300'>
        <button className='text-xl font-mono  from-neutral-800 font-bold '>Add Experience</button>
        <button className='text-xl font-bold' onClick={handleClick}>X</button>
      </div>
      <div className='flex flex-col '>
        <span className=' text-gray-500'>* Indicates required </span>

        <form className='flex flex-col m-2 text-gray-500'>
        <label className='m-1'>Title*</label>
          <input name="position" placeholder='Ex: Retails Sales Manager' className='rounded-md mb-2 border-2 border-black py-1 px-2' onChange={handleInputChange}/>

          <label className='m-1 text-2xl'>Company Name</label>
          <input name="company" placeholder="Ex: Microsoft" className='rounded-md mb-2 border-2 border-black py-1 px-2' onChange={handleInputChange} type='text'/>
          
          <label className='m-1 text-2xl'>Location</label>
          <input name="location" placeholder="Ex: New York" className='rounded-md mb-2 border-2 border-black py-1 px-2' onChange={handleInputChange} type='text'/>

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

          <div className='w-1/2'>
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

          <label className='m-1'>Description*</label>
          <textarea name="description" placeholder='Description' onChange={handleInputChange} className='h-40 rounded-md mb-2 border-2 border-black py-1 px-2 resize-none'/>

          <input className='border-2 border-blue-500 py-1 px-2 rounded-xl mb-1  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' onClick={submitExp}/>
        </form>
      </div>
    </div>
    </>
  );
};

  
export default ExperienceForm;

