import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Experienceform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const years = Array.from({ length: 100 }, (_, index) => (new Date().getFullYear() - index).toString());

    return (
        <div className="bg-white shadow-2xl rounded-xl absolute left-[10vw] top-[10vh] lg:left-[30vw] lg:top-[15vh] xl:left-[40vw] xl:top-[20vh] p-4">
        <div className="flex flex-row my-2 justify-around border-b-4 p-3 border-zinc-300">
            <button className="text-3xl font-mono mr-10 lg:mr-16 font-bold ">Add Experience</button>
            <button className="text-3xl font-bold">X</button>
        </div>
        <div className="flex flex-col">
            <span className="m-4 text-gray-500">* Indicates required </span>

            <form className="flex flex-col m-2 text-gray-500" >
                <label className="m-1 text-2xl">Title*</label>
                <input
                    placeholder="Ex: Retail Sales Manager"
                    className="h-10 rounded-md mb-6 border-2 border-black p-3"
                    {...register('institute', { required: true })}
                />
                {errors.institute && <p className="text-red-500 -mt-6 mb-6">Please Enter the Job Title</p>}

                <label className="m-1 text-2xl">Employment Type*</label>
                <select
                    placeholder="Please Select"
                    className='h-10 rounded-md mb-6 border-2 border-black pl-3'
                    type="text"
                    {...register('title', { required: true })} >
                     <option value='' key='defaultOption'>Please Select</option>
            <option value='Full Time' key='fullTimeOption'>Full Time</option>
            <option value='Part Time' key='partTimeOption'>Part Time</option>
            <option value='Self Employed' key='selfEmployedOption'>Self Employed</option>
            <option value='Freelance' key='freelanceOption'>Freelance</option>
            <option value='Internship' key='internshipOption'>Internship</option>
            <option value='Trainee' key='traineeOption'>Trainee</option>
            </select>
            {errors.employmentType && <p className='text-red-500 -mt-6 mb-6'>Enter Your Employment Type</p>}

                <label className="m-1 text-2xl">Company Name*</label>
                <input
                    placeholder="Ex: Microsoft"
                    className="h-10 rounded-md mb-6 border-2 border-black p-3"
                    type="text"
                    {...register('companyName',{required: true})} 
                />
                {errors.companyName && <p className='text-red-500 -mt-6 mb-6'>Enter The Company Name</p>}

                <label className='m-1 text-2xl'>Location</label>
          <input placeholder="Ex: New York" className='h-10 rounded-md mb-6 border-2 border-black p-3' type='text' {...register('location', { required: true })} />
          {errors.location && <p className='text-red-500 -mt-6 mb-6'>Enter the Location</p>}

          <label className='block m-1 text-2xl'>Location*</label>
          <select className='h-10 rounded-md mb-6 border-2 border-black pl-3' {...register('locationType', { required: true })}>
            <option value='' key='defaultLocationOption'>Please Select</option>
            <option value='On-Site' key='cityOption'>On-Site</option>
            <option value='Hybrid' key='Hybrid'>Hybrid</option>
            <option value='Remote' key='remoteOption'>Remote</option>
          </select>        
          {errors.locationType && <p className='text-red-500 -mt-6 mb-6'>Enter Your Location Type</p>}

          <div className=''>

        <label className='block m-1 text-2xl'>Start Date*</label>
        <select className='w-[265px] mr-6 h-10 rounded-md mb-4 border-2 border-black pl-3' {...register('startMonth', { required: true })}>
            <option  value=''>Month</option>
            {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
            ))}
            </select>

        <select className='w-[270px] ml-4 h-10 rounded-md mb-6 border-2 border-black pl-3 ' {...register('startYear', { required: true })}>
            <option value=''>Year</option>
            {years.map((year) => (
             <option key={year} value={year}>{year}</option>
         ))}
        </select>

        {errors.startMonth && <p className='text-red-500 -mt-6 mb-6'>Enter the Start Month</p>}
        {errors.startYear && <p className='text-red-500 ml-80 -mt-12 mb-6'>Enter the Start Year</p>}
        </div>

    <div className=''>

        <label className='block m-1 text-2xl'>End Date (or Expected)*</label>
        <select className='w-[265px] mr-4 h-10 rounded-md mb-6 border-2 border-black pl-3' {...register('endMonth', { required: true })} disabled={currentlyWorking}>
        <option  value=''>Month</option>
        {months.map((month, index) => (
         <option key={index} value={month}>{month}</option>
        ))}
        </select>

        <select className='w-[270px] ml-4 h-10 rounded-md mb-6 border-2 border-black pl-3' {...register('endYear', { required: true })} disabled={currentlyWorking}>
        <option value=''>Select Year</option>
        {years.map((year) => (
        <option key={year} value={year}>{year}</option>
        ))}
        </select>

    {!currentlyWorking && errors.endMonth && <p className='text-red-500 -mt-6 mb-6'>Enter the end Month</p>}
    {!currentlyWorking && errors.endYear && <p className='text-red-500 ml-80 -mt-12 mb-6'>Enter the end Year</p>}
    </div>
      
    <label className='m-1 text-2xl'>Industry*</label>
    <input className='h-10 rounded-md border-2 border-black p-3 mb-6' type='text' {...register('industry',{required: true})} />  
    <input className='border-2 border-blue-500  ml-[700px] mr-10 p-3 rounded-xl text-2xl  text-blue-500 hover:text-white hover:bg-blue-500' type='submit' />
        </form>
      </div>
        </div>
      )
    
}

export default Experienceform;
