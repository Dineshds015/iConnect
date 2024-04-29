import React from 'react'
import aboutus from '../gif/aboutus.gif'
const About = () => {
  return (
    <div className='w-screen h-screen '>
        <div className='md:flex'>
            <div className = 'mt-[50px] mb-[70px] mx-10'>
                <img className = 'md:h-[600px] md:w-[1500px]'src = {aboutus} alt = "loading..."/>
            </div>
            <div className='m-[70px]'>
                <h1 className = 'text-4xl' >About Us</h1>
                <p className="mt-[50px] text-2xl ">
                    Welcome to iConnect, your go-to platform for connecting with
                    fellow students on campus. 
                </p>
                <p className="mt-[20px] text-2xl">
                    Our mission is to foster a sense of community and belonging among
                    campus students by providing a space where you can easily find and
                    connect with like-minded individuals.
                </p>
                <p className="mt-[20px] text-2xl">
                    At iConnect, we prioritize inclusivity, diversity, and
                    accessibility.
                </p>
                <p className="mt-[20px] text-2xl">
                    iConnect is here to help you make the most out of
                    your college experience.
                </p>
                <p className="mt-[20px] mb-[20px] text-2xl">
                    Join us today and start connecting with your fellow campus
                    students!
                </p>
            </div>
        </div>
        <div className = 'bg-blue-500'>

        </div>
    </div>
  )
}

export default About
