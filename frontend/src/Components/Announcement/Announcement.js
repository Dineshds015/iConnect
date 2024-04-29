import React,{useState} from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const AnnouncementCard = ({postData}) =>{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='flex flex-col mx-4 my-2 bg-gray-50 p-2 rounded-xl hover:shadow-md hover:-translate-y-2 transition duration-300'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span className='font-bold text-lg'>{postData?.topic}</span>
            <span className='text-sm font-thin'>{postData?.desc.length > 60 ? postData.desc.substring(0, 60) + '...' : postData.desc}</span>
            {isHovered && (
                <div className='absolute top-0 -left-80 w-auto h-auto shadow-2xl bg-white flex justify-center items-center'>
                    <img src="https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"/>
                </div>
            )}
        </div>
    )
}

const Announcement = () => {

    // const userPosts = useSelector((store)=>store.post.posts)

    const navigate = useNavigate()
    const announcements = [
        { topic: "Important Announcement 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isAnnouncement: true },
        { topic: "Important Announcement 2", desc: "Sed eget tempor velit, non maximus arcu.", isAnnouncement: true },
        { topic: "Important Announcement 3", desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.", isAnnouncement: true },
        { topic: "Important Announcement 4", desc: "Maecenas sit amet lectus purus.", isAnnouncement: true },
        { topic: "Important Announcement 5", desc: "Pellentesque vel fringilla neque.", isAnnouncement: true },
        { topic: "Important Announcement 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isAnnouncement: true },
        { topic: "Important Announcement 2", desc: "Sed eget tempor velit, non maximus arcu.", isAnnouncement: true },
        { topic: "Important Announcement 3", desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.", isAnnouncement: true },
        { topic: "Important Announcement 4", desc: "Maecenas sit amet lectus purus.", isAnnouncement: true },
        { topic: "Important Announcement 5", desc: "Pellentesque vel fringilla neque.", isAnnouncement: true }
    ];

  return (
    <div className='flex flex-col  mt-5 m-4 bg-white rounded-xl h-auto'> 
    <div className='flex flex-row justify-between font-bold text-xl mx-4 p-2'>
        <span>Announcements</span>
        <span className='cursor-pointer' onClick={()=>navigate("/announcements")}><ArrowRightAltIcon/></span>
    </div>
    <div className='h-full'>
    {announcements.map((data,idx) =>
        {
            {/* console.log(idx) */}
            if(idx<3)
                return <AnnouncementCard key={data._id} postData={data}/>  // Don't render this post
            else
                return null
        }   
    )}
    </div>
    {announcements.length >3 && (
        <div className='flex border-t-2 items-center justify-center'>
        <span onClick={()=>navigate("/announcements")} className='text-xl font-semibold text-blue-400 py-1 hover:bg-blue-50 rounded-lg px-2 m-2 cursor-pointer'>See All</span>
        </div>
    )}
    </div>
  )
}

export default Announcement

