import React from 'react'
import logo from "../public/logo.png"
import Login from './Login'
const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg shadow-blue-950 bg-gray-50">
        <div className="flex col-span-4">
        <img className="h-28 px-4 mx-4 " alt="logo" src={logo} />
        </div>
        <div className="flex col-span-8 h-24 justify-self-end">
        <button className='p-4 m-4 text-xl font-semibold'>Home</button>
        <button className='p-4 m-4 text-xl font-semibold'>About Us</button>
        <button className='p-4 m-4 text-xl font-semibold'>Contact</button>
        </div>
    </div>
  )
}

export default Header