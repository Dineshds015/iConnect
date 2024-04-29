import React,{useState} from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const JobCard = ({postData}) =>{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='flex flex-col mx-4 my-2 bg-gray-50 p-2 rounded-xl hover:shadow-md hover:-translate-y-2 transition duration-300'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span className='font-bold text-lg'>{postData?.title}</span>
            <span className='font-semibold text-sm'>{postData?.company}</span>
            <span className='text-sm'>{postData?.location}</span>
            <span className='text-sm font-thin '>{postData?.description.length > 60 ? postData.description.substring(0, 60) + '...' : postData.description}</span>
            {isHovered && (
                <div className='absolute top-0 -left-80 w-auto h-auto shadow-2xl bg-white flex justify-center items-center'>
                    <img src="https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"/>
                </div>
            )}
        </div>
    )
}

const Jobs = () => {

    // const userPosts = useSelector((store)=>store.post.posts)
    const navigate = useNavigate()
    const jobOpportunities = [
        { title: "Software Engineer", company: "Tech Solutions Inc.", location: "New York, NY", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tempor velit, non maximus arcu.", isJobOpportunity: true },
        { title: "Data Analyst", company: "Data Analytics Co.", location: "San Francisco, CA", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.", isJobOpportunity: true },
        { title: "Marketing Manager", company: "Marketing Agency LLC", location: "Chicago, IL", description: "Maecenas sit amet lectus purus.", isJobOpportunity: true },
        { title: "UX Designer", company: "Design Innovations Ltd.", location: "Seattle, WA", description: "Pellentesque vel fringilla neque.", isJobOpportunity: true },
        { title: "Product Manager", company: "Product Development Co.", location: "Austin, TX", description: "Nulla facilisi. Sed eget tempor velit, non maximus arcu.", isJobOpportunity: true }
    ];
    

  return (
    <div className='flex flex-col  mt-5 m-4 bg-white rounded-xl h-auto'> 
    <div className='flex flex-row justify-between font-bold text-xl mx-4 p-2'>
        <span>Job Opportunities</span>
        <span className='cursor-pointer' onClick={()=>navigate("/jobs")}><ArrowRightAltIcon/></span>
    </div>
    <div className='h-full'>
    {jobOpportunities.map((data,idx) =>
        {
            {/* console.log(idx) */}
            if(idx<2)
                return <JobCard key={data._id} postData={data}/>  // Don't render this post
            else
                return null
        }   
    )}
    </div>
    {jobOpportunities.length> 2 && (
        <div className='flex border-t-2 items-center justify-center'>
        <span className='text-xl font-semibold text-blue-400 py-1 hover:bg-blue-50 rounded-lg px-2 m-2 cursor-pointer' onClick={()=>navigate("/jobs")}>See All</span>
        </div>
    )}
    </div>
  )
}

export default Jobs


