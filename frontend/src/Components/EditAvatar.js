import React, { useEffect, useRef, useState } from 'react'
// import  from "../public/cover.png"
import axios from 'axios';
import { postUser } from '../utlis/userSlice';
import { useDispatch } from 'react-redux';
import fetchUserProfile from '../helper/fetchData';
import { ToastContainer, toast } from 'react-toastify';

const EditAvatar = ({onClose}) => {

  const dispatch = useDispatch()
  const [user,setUser]=useState("");
  const fileInputRef = useRef(null);
  const [selectedFile,setSelectedFile] = useState(null)

  useEffect(()=>{
    fetchUserProfile(setUser);
  }, []);

  const getImage = (imgName) => {
    return require(`../public/${imgName}`);
  };

  const handleButtonClick = ()=> {
    fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
    console.log("selecttedFile",selectedFile)
  }

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = selectedFile;
    console.log("url: ",{img:file});
    const response =axios.post("http://localhost:8000/profile/updateUser", {image: file.name});
    console.log("uploaded");
    toast.success("Avatar Updated");
    setTimeout(()=>{
      window.location.reload();
    },2000);
  };

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
      <div className=' bg-white shadow-2xl rounded-xl absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2  sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6 w-2/3  '>
          <div className='flex flex-row   my-2 justify-between'>
          <span className='text-xl font-mono  from-neutral-800 '>Add Profile Picture</span>
          <span className='text-xl cursor-pointer' onClick={onClose}>X</span>
          </div>
          <hr className='border-2'/>
          <div className='flex flex-col items-center'>
          <img className='h-64 w-64 m-4 rounded-full' src={selectedFile ? URL.createObjectURL(selectedFile):((user.image)?getImage(user.image):"https://cdn-icons-png.freepik.com/512/10302/10302971.png")} alt="profile" />
          <hr className='border-2'/>
        
          <button className=' bg-blue-500 text-white py-1  px-2 m-2 font-semibold rounded-2xl' onClick={handleButtonClick} >{selectedFile ? "Change Photo" : "Edit Profile Image"}</button>
          
          {selectedFile &&
            <button className=' bg-blue-500 text-white py-1  px-2 m-2 font-semibold rounded-2xl' onClick={handleFileUpload} >Apply</button>
          }
          </div>
          <input style={{display : 'none'}} type="file" ref={fileInputRef} onChange={handleFileChange} />
      </div>
    </>
  )
}

export default EditAvatar
