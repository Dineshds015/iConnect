import React from 'react'


const AnnouncementCard = ({postData}) =>{
    return (
        <div className='flex flex-col mx-4 my-2 bg-gray-50 p-2 rounded-xl hover:shadow-md hover:-translate-y-2 transition duration-300'>
            
            <span className='font-bold text-lg'>{postData?.topic}</span>
            <span className='text-sm font-thin'>{postData?.desc.length > 60 ? postData.desc.substring(0, 60) + '...' : postData.desc}</span>
        </div>
    )
}
const AnnouncementPage = () => {

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
    <div className='grid grid-flow-col grid-cols-12 mt-20 bg-slate-200 h-[100vh] '>
    <div className='col-span-12 flex flex-col m-4 h-full bg-white rounded-xl '> 
    <div className='flex flex-row justify-between font-bold text-xl mx-4 p-2'>
        <span>Announcements</span>
        {/* <span className='cursor-pointer' onClick={()=>navigate("/announcements")}><ArrowRightAltIcon/></span> */}
    </div>
    <div className='h-[50vh] overflow-x-hidden overflow-y-auto'>
    {announcements.map((data,idx) =>
        {    
            return <AnnouncementCard key={data._id} postData={data}/>  // Don't render this post
        }   
    )}
    </div>
   
    </div>
    </div>
  )
}

export default AnnouncementPage
