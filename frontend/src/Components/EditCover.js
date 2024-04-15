import React, { useRef, useState } from 'react'
import cover from "../public/cover.png"
import axios from 'axios';
import { postUser } from '../utlis/userSlice';
import { useDispatch } from 'react-redux';
const EditCover = ({onClose}) => {

  
  const dispatch = useDispatch()

  const fileInputRef = useRef(null);
  const [selectedFile,setSelectedFile] = useState(null)

  const handleButtonClick = ()=> {
    fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
    console.log("selecttedFile",selectedFile)
  }

  const handleUpload = async() => {
    
      // update user data with cover image and send user data as response

      dispatch(postUser(response.data?.data))
  }

  return (
    <div className='bg-white shadow-2xl rounded-xl absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2  sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6 w-2/3'>
        <div className='flex flex-row   my-2 justify-between'>
        <span className='text-xl font-mono  from-neutral-800 '>Add Cover Image</span>
        <span className=' text-xl cursor-pointer' onClick={onClose}>X</span>
        </div>
        <hr className='border-2'/>
        <div className='flex flex-col items-center'>
        <img className='h-64 w-64 m-4 rounded-lg' src={selectedFile ? URL.createObjectURL(selectedFile) : cover} alt="cover" />
        <hr className='border-2'/>
        {/* <div className='flex flex-row-reverse w-full '> */}
        <button className=' bg-blue-500 text-white py-1 px-2 m-2 font-semibold rounded-2xl' onClick={handleButtonClick} >{selectedFile ? "Change Photo" : "Edit Cover Image"}</button>

        {selectedFile &&
          <button className=' bg-blue-500 text-white py-1 px-2 m-2  font-semibold rounded-2xl' onClick={handleUpload} >Apply</button>
        }
        </div>
        <input style={{display : 'none'}} type="file" ref={fileInputRef} onChange={handleFileChange} />
    </div>
  )
}

export default EditCover
