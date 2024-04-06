import React from 'react'
import logo from "../public/logo.png"
import google from "../public/google.png"
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate()
  const handleOnClick = ()=>{
    navigate("/login")
  }
  return (
    <div className="flex flex-row justify-center shadow-lg">
        <div className="flex flex-col">
            <img className="rounded-2xl m-4" src={logo} alt="logo"/>
            <form className='flex flex-col'>
            <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="name" placeholder='Enter Your Name'/>
            <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="email" placeholder='Enter Your Email'/>
            <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="password" placeholder='Enter Your Password'/>
            <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="password" placeholder='Confirm Password'/>

            <button className='mx-4 px-4 my-2 mb-8 border border-solid w-auto h-12 rounded-full bg-blue-500 font-bold text-2xl' type = "submit"  >Sign Up</button>
            </form>
        </div>
        <div className='flex flex-col justify-center m-10 mt-44'>
            <button className='mx-4 px-4 my-2 border border-solid w-96 h-12 rounded-full bg-teal-300 text-2xl flex items-center justify-center' type = "submit"  ><img className='h-8  mr-2' src={google} alt='Google Logo' />Login In with Google</button>
            <button className='mx-4 px-4 my-2 border border-solid w-96 h-12 rounded-full bg-teal-300 text-2xl flex items-center justify-center' type = "submit"  ><img className='h-8 border border-solid mr-2' src='https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' alt='LinkedIn Logo' />Login In with LinkedIn</button>
            <span className='ml-32 cursor-pointer' onClick={handleOnClick}>Already have an account? Sign In</span>

        </div>
    </div>
  )
}

export default Signup