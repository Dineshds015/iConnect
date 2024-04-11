import React, { useState } from 'react'
import logo from "../public/logo.png"
import google from "../public/google.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../helper/alert';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });

  const navigate = useNavigate()
  const handleOnClick = ()=>{
    navigate("/signup")
  }

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    console.log(name);
  }

  const submitLogin=(e)=>{
    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:8000/auth/login",formData).then((res)=>{
      console.log(res.data);
      navigate('/Profile');
    }).catch((err)=>{
      Alert.error("Invalid Details");
      console.log(err.message)
    })
  }

  return (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition= "Bounce"
      />
      {/* Same as */}
    <ToastContainer />
    <div className="flex flex-row justify-center shadow-lg">
        <div className="flex flex-col">
            <img className="rounded-2xl m-4" src={logo} alt="logo"/>
            <form className='flex flex-col'>
            <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="email" placeholder='Enter Your Email' onChange={handleInputChange}/>
            <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="password" placeholder='Enter Your Password' onChange={handleInputChange}/>
            <button className='mx-4 px-4 my-2 mb-8 border border-solid w-auto h-12 rounded-full bg-blue-500 font-bold text-2xl' type = "submit" onClick={submitLogin}>Sign In</button>
            </form>
        </div>
        <div className='flex flex-col justify-center m-10 mt-44'>
            <button className='mx-4 px-4 my-2 border border-solid w-96 h-12 rounded-full bg-teal-300 text-2xl flex items-center justify-center' type = "submit"  ><img className='h-8  mr-2' src={google} alt='Google Logo' />Login In with Google</button>
            <button className='mx-4 px-4 my-2 border border-solid w-96 h-12 rounded-full bg-teal-300 text-2xl flex items-center justify-center' type = "submit"  ><img className='h-8 border border-solid mr-2' src='https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' alt='LinkedIn Logo' />Login In with LinkedIn</button>
            <span className='ml-32 cursor-pointer' onClick={handleOnClick}>Don't have an account? Sign Up</span>

        </div>
    </div>
</>
  )
}

export default Login