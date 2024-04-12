import React from 'react';
import logo from "../public/logo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-2 m-2 shadow-lg shadow-blue-950 bg-gray-50">
            <div className="flex justify-center items-center">
                <img className="h-20 px-4 mx-4 rounded-full cursor-pointer" alt="logo" src={logo} onClick={handleClick} />
                <div className="relative">
                    <input className='border-2 border-gray-400 p-4 h-7 w-80 mt-7 rounded-l-full' type="text" placeholder='Search' />
                    <span className='absolute flex items-center justify-center bg-gray-200 rounded-r-full py-2 px-2'>🔍</span>
                </div>
            </div>
            <div className="flex justify-end items-center space-x-4">
                <button className='p-4 text-xl font-semibold' onClick={handleClick}>Home</button>
                <button className='p-4 text-xl font-semibold'>About Us</button>
                <button className='p-4 text-xl font-semibold'>Contact</button>
            </div>
        </div>
    )
}

export default Header;
