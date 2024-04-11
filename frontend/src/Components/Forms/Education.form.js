import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';

const Educationform = () => {
    const {
        register,handleSubmit,watch,formState: { errors },} = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
    
      const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());
    
      return (
        <div className="bg-white shadow-2xl rounded-xl absolute left-[10vw] top-[10vh] lg:left-[30vw] lg:top-[15vh] xl:left-[40vw] xl:top-[20vh] p-4">
        <div className="flex flex-row my-2 justify-around border-b-4 p-3 border-zinc-300">
            <button className="text-3xl font-mono mr-10 lg:mr-16 font-bold ">Add Education</button>
            <button className="text-3xl font-bold">X</button>
        </div>
        <div className="flex flex-col">
            <span className="m-4 text-gray-500">* Indicates required </span>

            <form className="flex flex-col m-2 text-gray-500" >
                <label className="m-1 text-2xl">Institute*</label>
                <input
                    placeholder="Ex: MNNIT"
                    className="h-10 rounded-md mb-6 border-2 border-black p-3"
                    {...register('institute', { required: true })}
                />
                {errors.institute && <p className="text-red-500 -mt-6 mb-6">Please Enter the Institute Name</p>}

                <label className="m-1 text-2xl">Degree</label>
                <input
                    placeholder="Ex: Master's"
                    className="h-10 rounded-md mb-6 border-2 border-black p-3"
                    type="text"
                    {...register('degree')}
                />

                <label className="m-1 text-2xl">Field of Study</label>
                <input
                    placeholder="Ex: Computer Science"
                    className="h-10 rounded-md mb-6 border-2 border-black p-3"
                    type="text"
                    {...register('fieldOfStudy')}
                />

                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 mr-4 mb-6 lg:mb-0">
                        <label className="block m-1 text-2xl">Start Date*</label>
                        <div className="flex">
                            <select className="w-1/2 mr-2 h-10 rounded-md mb-4 border-2 border-black pl-3" {...register('startMonth', { required: true })}>
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))}
                            </select>
                            <select className="w-1/2 ml-2 h-10 rounded-md mb-6 border-2 border-black pl-3" {...register('startYear', { required: true })}>
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        {errors.startMonth && <p className="text-red-500 -mt-6 mb-6">Enter the Start Month</p>}
                        {errors.startYear && <p className="text-red-500 -mt-6 mb-6">Enter the Start Year</p>}
                    </div>

                    <div className="flex-1">
                        <label className="block m-1 text-2xl">End Date (or Expected)*</label>
                        <div className="flex">
                            <select className="w-1/2 mr-2 h-10 rounded-md mb-4 border-2 border-black pl-3" {...register('endMonth', { required: true })}>
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))}
                            </select>
                            <select className="w-1/2 ml-2 h-10 rounded-md mb-6 border-2 border-black pl-3" {...register('endYear', { required: true })}>
                                <option value="">Select Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        {errors.endMonth && <p className="text-red-500 -mt-6 mb-6">Enter the End Month</p>}
                        {errors.endYear && <p className="text-red-500 -mt-6 mb-6">Enter the End Year</p>}
                    </div>
                </div>

                <label className="m-1 text-2xl">Grade</label>
          <input className='h-10 rounded-md border-2 border-black p-3 mb-6' type='text' {...register('grade')} />  
          <input className='border-2 border-blue-500  ml-[700px] mr-10 p-3 rounded-xl text-2xl  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' />
        </form>
      </div>
        </div>
      )
}

export default Educationform