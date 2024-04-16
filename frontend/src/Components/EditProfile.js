import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleEducation } from '../utlis/educationSlice'
import { toggleExperience } from '../utlis/experienceSlice'
import { toggleProject } from '../utlis/projectSlice'

const EditProfile = ({onClose,onSkill}) => {

  const dispatch = useDispatch()
  const handleAddEducation = ()=>{
   dispatch(toggleEducation())
  }
  const handleAddSkill = ()=>{
    onSkill()
    onClose()
  }
  const handleAddProject = ()=>{
    dispatch(toggleProject())
  }
  const handleAddExperience= ()=>{
    dispatch(toggleExperience())
  }

  

  return (
    <div className='bg-gray-200 shadow-2xl rounded-xl absolute top-96 left-1/2  h-auto w-[300px]  transform -translate-x-1/2 -translate-y-1/2 p-4'>
      <div className='flex flex-row   my-2 justify-between border-b-2 p-1 m-1 border-zinc-300'>
        <button className='text-xl font-mono from-neutral-800 font-bold '>Add To Profile</button>
        <button className=' text-xl font-bold' onClick={onClose}>X</button>
      </div>
      <div className='flex flex-col'>
      <button className=' font-mono font-bold border-b-4 border-zinc-300 p-2 text-slate-600  hover:text-xl hover:text-blue-400' onClick={handleAddSkill}>Add Skills</button>
      <button className=' font-mono font-bold border-b-4 p-2 border-zinc-300 text-slate-600 hover:text-xl hover:text-blue-400' onClick={handleAddEducation}>Add Education</button>
      <button className=' font-mono font-bold border-b-4 p-2 border-zinc-300 text-slate-600 hover:text-xl hover:text-blue-400' onClick={handleAddProject}>Add Project</button>
      <button className=' font-mono font-bold  p-2 border-zinc-300 text-slate-600 hover:text-xl hover:text-blue-400' onClick={handleAddExperience}>Add Experience</button>
      </div>
      
    </div>
  )
}

export default EditProfile
