import React from 'react'
const Card = ({ description, image }) => {
  return (
    <div className="bg-blue-400 dark:bg-slate-600  bg-cover relative max-w-sm overflow-hidden rounded-2xl shadow-lg group m-3">
      <img className=" rounded-lg transistion-transform group-hover:scale-110 duration-200 w-full md:h-64 object-cover p-2" src={image} alt = {""}/>
      <div className="flex items-end">
        <div className="p-4 text-black font-semibold text-center ">{description}</div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <div class = "max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
        {/* <div className = "basis-[45%] transistion-transform group-hover:scale-110 duration-200 bg-gradient-to-t from-black/60 to-transparent">
          <img  src = "https://png.pngtree.com/thumb_back/fh260/background/20230413/pngtree-asian-college-student-studies-with-friends-on-campus-photo-image_51392840.jpg" className = "w-full rounded-md"/>
        </div> */}
        <div className="text-center px-5 py-3 text-lg italic">
          <p className="mb-5 ">
            Welcome to iConnect, your go-to platform for connecting with
            fellow students on campus. 
          </p>
          <p className="mb-5">
            Our mission is to foster a sense of community and belonging among
            campus students by providing a space where you can easily find and
            connect with like-minded individuals.
          </p>
          <p className="mb-5">
            At iConnect, we prioritize inclusivity, diversity, and
            accessibility.
          </p>
          <p className="mb-5">
            iConnect is here to help you make the most out of
            your college experience.
          </p>
          <p>
            Join us today and start connecting with your fellow campus
            students!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-20">
          <Card
            description="Building familiarity"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAOKrZrk_RHGkemf0fVaDgaD0ySPRAfiE9Q&s"
          />
          <Card
            description="Support till your last day in campus"
            image="https://media.istockphoto.com/id/1473712270/photo/study-laptop-and-group-of-students-on-floor-in-project-research-or-planning-brainstorming-and.webp?b=1&s=170667a&w=0&k=20&c=d34rhAlWqb-5I_DZ8l98ORuMKZyOeRt91tIBF6zgFhU="
          />

          <Card
            description="Healthy and helpful connections"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8E5KqCbXcoEbkkp0RWXuY8cmtScEOtCtfpg&s"
          />
          <Card
            description="Working together"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQ4vXLJy8kcf1s4UuFNRIzyp9gJsG6E4Skg&s"
          />
          <Card
            description="Exchanging ideas"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAwPu2e8EA3EWv-Axs4u_WydOzoIW-X-M0A&s"
          />
        </div>
    </div>
  </div>
  )
}

export default About

