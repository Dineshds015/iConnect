import React from 'react'
import ProfileCard from '../ProfileCard'
import MyConnection from '../My Network/MyConnection'

const JobCard = ({postData}) =>{
    const owner=""
    return (
        <div className='flex flex-col shadow-2xl bg-white p-4 rounded-xl m-4 '>
                <div className='flex flex-row mb-4 '>
                    <img className='h-12 w-12 rounded-full' src="https://cdn-icons-png.freepik.com/512/10302/10302971.png"/>
                    <div className='flex flex-col ml-2'>
                        <span className='font-bold text-lg'>{owner?.name ? owner?.name : "No Name"}</span>
                        <span className=''>{owner?.headline ? owner?.headline : "No Headline"}</span>
                    </div>
                </div>
                <span className='font-bold text-xl '>{postData?.company}</span>
            <span className='font-semibold text-lg'>{postData?.Title}</span>
            <span className=''>{postData?.location}</span>
            <span className=' font-thin '>{postData?.description.length > 60 ? postData.description.substring(0, 60) + '...' : postData.description}</span>
                    <img className='mt-2 h-96' src="https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"/>
                </div>
    )
}
const JobsPage = () => {

  const jobOpportunities = [
    { title: "Software Engineer", company: "Tech Solutions Inc.", location: "New York, NY", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tempor velit, non maximus arcu.", isJobOpportunity: true },
    { title: "Data Analyst", company: "Data Analytics Co.", location: "San Francisco, CA", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.", isJobOpportunity: true },
    { title: "Marketing Manager", company: "Marketing Agency LLC", location: "Chicago, IL", description: "Maecenas sit amet lectus purus.", isJobOpportunity: true },
    { title: "UX Designer", company: "Design Innovations Ltd.", location: "Seattle, WA", description: "Pellentesque vel fringilla neque.", isJobOpportunity: true },
    { title: "Product Manager", company: "Product Development Co.", location: "Austin, TX", description: "Nulla facilisi. Sed eget tempor velit, non maximus arcu.", isJobOpportunity: true }
];
  return (
    <div className='grid grid-flow-col grid-cols-12 mt-20 bg-slate-200 h-[100vh] '>
    <div className='hidden md:block md:col-span-4 xl:hidden' >
    <ProfileCard/>
        <MyConnection/>
    </div>
    <div className='hidden xl:block xl:col-span-1 '></div>
    <div className='hidden xl:block xl:col-span-3  2xl:col-span-3' >
        <ProfileCard/>
        <MyConnection/>
    </div>
    <div className='col-span-12 md:col-span-8 xl:col-span-7 2xl:col-span-7 flex flex-col m-4 h-full bg-white rounded-xl '> 
    <div className='flex flex-row justify-between font-bold text-xl mx-4 p-2'>
        <span>Job Opportunities</span>
        {/* <span className='cursor-pointer' onClick={()=>navigate("/announcements")}><ArrowRightAltIcon/></span> */}
    </div>
    <div className='h-[95vh] overflow-x-hidden overflow-y-auto'>
    {jobOpportunities.map((data,idx) =>
        {    
            return <JobCard key={data._id} postData={data}/>  // Don't render this post
        }   
    )}
    </div>
   
    </div>

    <div className='hidden md:block md:col-span-1 xl:col-span-2 2xl:col-span-2' ></div>
    </div>
  )
}

export default JobsPage
