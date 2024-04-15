import React from 'react'
import like from "../public/like.png"
import share from "../public/share.png"
import comment from "../public/comment.png"
import liked from "../public/liked.png"
import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Post = ({postData}) => {

  // console.log("postDta",postData)

  const postCreatedAt = new Date(postData.createdAt);
const currentDateTime = new Date();

// Calculate the time difference
const timeDifference = currentDateTime - postCreatedAt;

// Convert time difference to days, hours, minutes, seconds
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);
const monthsDifference = Math.floor(daysDifference / 30);

// Use these values in your third span
const timeSincePost = `${daysDifference}d ${hoursDifference}h ${minutesDifference}m ${secondsDifference}s`;
  const navigate = useNavigate()
    const [showFullText, setShowFullText] = useState(false);
    const [activeLike , setActiveLike] = useState(postData.likedByCurrentUser)
    // console.log(postData.likedByCurrentUser)
    const sliderRef = useRef(null);
    const user = useSelector((store)=>store.user)

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleLike = async () => {
    // handle like
  }
  
  const settings = {
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true
};
  const handleSliderScroll = (e) => {
    if (e.deltaX < 0) {
        sliderRef.current.slickPrev(); // Scroll up, display previous image
    } else if(e.deltaX>0) {
        sliderRef.current.slickNext(); // Scroll down, display next image
    }
};

const handleViewProfile = ()=>{
  // navigate(`/${postData.owner._id}/profile`)
  // not implemented as of now
}
  return (
    <div className='rounded-xl bg-slate-50 mt-4 shadow-md  '>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row m-4'>
                <img className='h-14 w-14 rounded-full' src={postData?.owner?.avatar ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="profile"/>
                <div className='flex flex-col mx-2' onClick={handleViewProfile}>
                    <span className='font-bold'>{postData?.owner>.fullName ?? "Your Name"}</span>
                    <span className='font-thin -mt-1 text-sm'>{postData?.owner?.headline ?? "Headline"}</span>
                    <span className='font-thin -mt-1 text-sm'>{`${secondsDifference>60 ? minutesDifference>60? hoursDifference>24? daysDifference>30 ? `${monthsDifference}mo`: `${daysDifference}d`: `${hoursDifference}hr` : `${minutesDifference}mins` : `${secondsDifference}s`} ago`}</span>
                </div>
            </div>
            <div className='flex flex-row m-4'>
                <span className='text-blue-700 font-bold '><PersonAddOutlinedIcon/> connect</span>
            </div>
        </div>

        <div className='mx-4'>
        <p className=''>
      {showFullText ? postData?.desc : postData?.desc.slice(0, 30)}
      {!showFullText && postData?.desc?.length>30 && '...'}
    </p>
    {!showFullText && postData?.desc?.length>30 && (
      <button className="text-blue-500" onClick={handleToggleText}>
        See more
      </button>
    )}
        <div className="slider"  onWheel={handleSliderScroll}>
          <Slider ref={sliderRef} {...settings}>
              {postData?.images.map((file, index) => (
                  <div key={index} className="flex flex-col items-center">
                      {/* <span className="mb-2 text-gray-500">{`${index + 1} / ${postData.images.length}`}</span> */}
                      <img src={file} alt={`slide-${index}`} className="w-full h-[400px]" />
                  </div>
              ))}
          </Slider>
            </div>
        </div>
        <div className='flex flex-row justify-between mx-4'>
            <span>{postData?.likeCount===0?"":postData?.likeCount}</span>
            <span>{postData?.commentCount===0?"":postData?.commentCount}</span>
        </div>
        <div className='flex flex-row justify-between mx-4'>
            {/* <img className='h-10 mb-4' src={activeLike ? liked : like} alt="like" onClick={handleLike}/>
            <img className='h-10' src={comment} alt="comment" />
            <img className='h-10' src={share} alt="share"/> */}
            <span className='mt-2 mb-4'><ThumbUpAltOutlinedIcon/> Like</span>
            <span className='mt-2 mb-4'><AddCommentOutlinedIcon/> Comment</span>
            <span className='mt-2 mb-4'><IosShareOutlinedIcon/> Share</span>

        </div>
      
    </div>
  )
}

export default Post
