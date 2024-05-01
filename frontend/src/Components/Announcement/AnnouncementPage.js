import React from 'react'
import ProfileCard from '../ProfileCard'
import MyConnection from '../My Network/MyConnection'


const AnnouncementCard = ({postData}) =>{
    const owner=""
    return (
        <div className='flex flex-col shadow-2xl bg-white p-4 rounded-xl m-4 '>
                <div className='flex flex-row '>
                    <img className='h-12 w-12 rounded-full' src="https://cdn-icons-png.freepik.com/512/10302/10302971.png"/>
                    <div className='flex flex-col ml-2'>
                        <span className='font-bold text-lg'>{owner?.name ? owner?.name : "No Name"}</span>
                        <span className=''>{owner?.headline ? owner?.headline : "No Headline"}</span>
                    </div>
                </div>
                <span className='font-bold text-lg mt-3'>{postData?.topic}</span>
                <span className='text-sm font-thin mt-2'>{postData?.desc.length > 60 ? postData.desc.substring(0, 60) + '...' : postData.desc}</span>
                    <img className='mt-2 h-96' src="https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"/>
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
    <div className='hidden md:block md:col-span-4 xl:hidden ' >
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
        <span>Announcements</span>
        {/* <span className='cursor-pointer' onClick={()=>navigate("/announcements")}><ArrowRightAltIcon/></span> */}
    </div>
    <div className='h-[95vh] overflow-x-hidden overflow-y-auto'>
    {announcements.map((data,idx) =>
        {    
            return <AnnouncementCard key={data._id} postData={data}/>  // Don't render this post
        }   
    )}
    </div>
   
    </div>

    <div className='hidden md:block md:col-span-1 xl:col-span-2 2xl:col-span-2' ></div>
    </div>
  )
}

export default AnnouncementPage
