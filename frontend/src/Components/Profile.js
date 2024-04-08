import React,{useEffect, useState}from 'react'
import cover from "../public/coverphoto.jpeg"
import pic from "../public/profilepic.jpeg"
import Education from './Education';
import Experience from './Experience';
const Profile = () => {
  const [addProfile,setAddProfile]=useState(false);
  const handleButtonClick=()=>{
      setAddProfile(!addProfile);
  }

  


  return (
    <div class="grid grid-cols-12">

  <div className="col-span-1"> 
  </div>
  <div className="col-span-4 bg-gray-100 flex flex-col"> 
      <div className=''><Education/></div>
      <div className=''><Experience/></div>
  </div>
  <div className="col-span-6 bg-gray-200"> 
       <div> <img className="object-cover h-96 w-full "  src={cover} alt="cover photo"/>
        <img className="object-cover rounded-full -mt-14 ml-2"  src={pic} alt="cover photo"/>
        <div className='flex flex-col'>
            <span className='text-black text-2xl font-bold ml-10'>Nitumoni Mech</span>
            <span className='text-black text-lg ml-10'>Software Developer</span>
        </div>
        <button class="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-2xl ml-7 mr-[32rem] mt-3" onClick={handleButtonClick}>
    Add Profile
  </button>
  </div>
</div>
{ addProfile && (
  <div className='bg-gray-200 shadow-2xl rounded-xl absolute ml-[1000px] mt-80 h-[500px] w-[400px]  transform -translate-x-1/2 -translate-y-1/2 p-4'>
  <div className='flex flex-row   my-2 justify-around border-b-4 p-3 border-zinc-300'>
    <button className='text-xl font-mono mr-56 from-neutral-800 font-bold '>Add To Profile</button>
    <button className=' text-2xl font-bold' onClick={handleButtonClick}>X</button>
  </div>
  <div className='flex flex-col'>
  <button className='text-xl font-mono font-semibold m-4 border-b-4 border-zinc-300 p-2 text-slate-600 mt-10 hover:text-3xl hover:text-blue-400'>Add Skills</button>
  <button className='text-xl font-mono font-semibold m-4  border-b-4 p-2 border-zinc-300 text-slate-600 hover:text-3xl hover:text-blue-400'>Add Education</button>
  <button className='text-xl font-mono font-semibold m-4  border-b-4 p-2 border-zinc-300 text-slate-600 hover:text-3xl hover:text-blue-400'>Add Project</button>
  <button className='text-xl font-mono font-semibold m-4  border-b-4 p-2 border-zinc-300 text-slate-600 hover:text-3xl hover:text-blue-400'>Add Experience</button>
  </div>
  
</div>
      )}


    <div class="col-span-1">
    </div>
  </div>
  )
}

export default Profile