import React,{useEffect,useState} from 'react'
// import { post } from '../../../backend/routes/profile';

const AnnouncementAndJobCard = ({cType, page, postData}) => {

    const [showFullText, setShowFullText] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const owner = postData.userId
  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const getImage = (imgName) => {
    return require(`../public/${imgName}`);
  };
  return (
    <div className='rounded-xl bg-slate-100 py-1 mt-4  hover:shadow-lg hover:-translate-y-2 transition duration-200'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row m-4'>
            <img className='h-14 w-14 rounded-full' src={getImage(postData?.userId?.image) ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="profile"/>
            <div className='flex flex-col mx-2' >
                <span className='font-bold'>{postData?.userId?.name ?? "Your Name"}</span>
                <span className='font-thin -mt-1 text-sm'>{postData?.userId?.headline ?? "Headline"}</span>
                {/* <span className='font-thin -mt-1 text-sm'>{`${secondsDifference>60 ? minutesDifference>60? hoursDifference>24? daysDifference>30 ? `${monthsDifference}mo`: `${daysDifference}d`: `${hoursDifference}hr` : `${minutesDifference}mins` : `${secondsDifference}s`} ago`}</span> */}
            </div>
        </div>
        {/* <div className='flex flex-row m-4'>
            {!isConnected && <span className='text-blue-700 font-bold' onClick={handleConnect}><PersonAddOutlinedIcon/> connect</span>}
        </div> */}
    </div>

    <div className='mx-4'>
          <p className=''>
        {showFullText ? postData?.content : postData?.content.slice(0, 30)}
        {!showFullText && postData?.content?.length>30 && '...'}
      </p>
      {!showFullText && postData?.content?.length>30 && (
        <button className="text-blue-500" onClick={handleToggleText}>
          See more
        </button>
      )}
      </div>
      {isHovered && (
                <div className='flex flex-col absolute -top-16 -left-80 w-96  shadow-2xl bg-white p-4 rounded-xl '>
                <div className='flex flex-row '>
                    <img className='h-12 w-12 rounded-full' src="https://cdn-icons-png.freepik.com/512/10302/10302971.png"/>
                    <div className='flex flex-col ml-2'>
                        <span className='font-bold'>{owner?.name ? owner?.name : "No Name"}</span>
                        <span className='text-sm'>{owner?.headline ? owner?.headline : "No Headline"}</span>
                    </div>
                </div>
                {/* <span className='font-bold text-lg'>{postData?.topic}</span> */}
                <span className='text-sm font-thin mt-2'>{postData?.content.length > 60 ? postData.content.substring(0, 60) + '...' : postData.content}</span>
                    <img className='mt-2' src={"https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"}/>
                </div>
            )}
      </div>
  )
}

export default AnnouncementAndJobCard
