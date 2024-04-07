import React from 'react'
import logo from "../public/logo.png"
import Login from './Login'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/")
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg shadow-blue-950 bg-gray-50">
        <div className="flex col-span-4">
        <img className="h-20 px-4 mx-4 rounded-full " alt="logo" src={logo} onClick={handleClick} />
        <input className='border-4 border-gray-400 p-4 h-7 w-80 mt-10 rounded-l-full' type="text" placeholder='Serach' ></input>
        <span className='mt-10 border-4 border-gray-400 h-10 rounded-r-full py-2 px-2'>🔍</span>
        </div>
        <div className="flex col-span-8 h-24 justify-self-end">
        <button className='p-4 m-4 text-xl font-semibold' onClick={handleClick}>Home</button>
        <button className='p-4 m-4 text-xl font-semibold'>About Us</button>
        <button className='p-4 m-4 text-xl font-semibold'>Contact</button>
        </div>
    </div>
  )
}

export default Header