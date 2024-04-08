import React from 'react'
import pen from "../public/pen.png"
import clg from "../public/clgimg.png"


const Experience = () => {
  return (
    <div className='bg-blue-200 shadow-2xl rounded-xl h-auto w-auto mx-4 my-6 p-4'>
      <div className='flex justify-between'>
        <div>
          <span className='font-bold text-xl'>Experience</span>
        </div>
        <div className='flex items-center'>
          <span className='font-bold mr-2'>+ </span>
          <img className='h-10 w-10' src={pen} alt="pen"/>
        </div>
      </div>

      <div className='mt-7 flex items-center'>
        <img className='h-24 w-24 rounded-full' src={clg} alt="college"/>
        <div className='flex flex-col ml-3'>
            <span className='font-bold'>Motilal Nehru National Institute of Technology</span>
            <span>MCA</span>
            <span>August 2022 - July 2025</span>
        </div>
      </div>
    </div>
  )
}

export default Experience