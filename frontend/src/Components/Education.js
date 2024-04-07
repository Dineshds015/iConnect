import React from 'react'
import pen from "../public/pen.png"
import clg from "../public/clgimg.png"
const Education = () => {
  return (
    <div className='bg-blue-200 shadow-2xl rounded-xl absolute ml-[235px] mt-40 h-[300px] w-[450px]  transform -translate-x-1/2 -translate-y-1/2 p-4'>
      <div className='flex justify-between'>
        <div>
        <span className='font-bold text-xl'>Education</span>
        </div>
        <div className='flex flex-row'>
          <span className='font-bold mr-2'>+ </span>
          <img className='h-10 w-10 -mt-2' src={pen} alt="pen"/>
        </div>
      </div>

      <div className='mt-7 flex flex-row'>
        <img className='h-24 w-24 rounded-full' src={clg} alt="college image"/>
        <div className='flex flex-col border-b border-white ml-3'>
            <span className='font-bold'>Motilal Nehru National Institute of Technology</span>
            <span>MCA</span>
            <span>August 2022 - July 2025</span>
        </div>
      </div>

    </div>
  )
}

export default Education