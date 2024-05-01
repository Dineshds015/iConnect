import React,{useEffect,useState,useRef} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SendIcon from '@mui/icons-material/Send'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { Provider, LikeButton } from "@lyket/react";
import fetchLike from '../helper/fetchLike';
import fetchUserProfile from '../helper/fetchData';
import Comments from './Comments';


const Post = ({postData}) => {

  // console.log("postDta",postData)

  const postCreatedAt = new Date(postData.postDate);
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
  // const userData = useSelector((store)=>store.user)
    const [user,setUser]=useState();
    const [showFullText, setShowFullText] = useState(false);
    const [activeLike , setActiveLike] = useState(false);
    const [countLike,setCountLike]=useState(0);
    const [buttonKey,setButtonKey]=useState(0);
    const [addComment,setAddComment] = useState(false)
    const [comment,setComment] = useState("")
    // console.log(postData.likedByCurrentUser)
    const sliderRef = useRef(null);
    //const user = useSelector((store)=>store.user)

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    fetchUserProfile(setUser);
  }, []);

  useEffect(()=>{
    fetchLike(setActiveLike,setCountLike,postData._id);
  },[postData._id,activeLike]);

  useEffect(()=>{
    console.log("reflected: ",activeLike);
    setButtonKey((prevKey) => prevKey + 1);
  },[activeLike]);
  
  const handleLike = async () => {
      // handle like
      setActiveLike(!activeLike);
      console.log("like status: ",activeLike);
      axios.post("http://localhost:8000/like/manageLike",
      
      {
          postId:postData._id,
          status:!activeLike
      })
      .then((res) => {
          console.log(res.data);
          //setActiveLike(!activeLike);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  const handleAddComment = async()=>{
    axios.post("http://localhost:8000/comment/create",{
      postId:postData._id,
      content:comment,
    })
        .then((res) => {
            console.log("commented ",res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
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
  navigate(`/${postData.owner._id}/profile`)
}

const getImage = (imgName) => {
  return require(`../public/${imgName}`);
};

  return (
    <div className='rounded-xl bg-slate-50 mt-4 shadow-md  '>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row m-4'>
                {/* <img className='h-14 w-14 rounded-full' src={getImage(postData?.userId?.image) ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="profile"/> */}
                <div className='flex flex-col mx-2' onClick={handleViewProfile}>
                    <span className='font-bold'>{postData?.userId?.name ?? "Your Name"}</span>
                    <span className='font-thin -mt-1 text-sm'>{postData?.userId?.headline ?? "Headline"}</span>
                    <span className='font-thin -mt-1 text-sm'>{`${secondsDifference>60 ? minutesDifference>60? hoursDifference>24? daysDifference>30 ? `${monthsDifference}mo`: `${daysDifference}d`: `${hoursDifference}hr` : `${minutesDifference}mins` : `${secondsDifference}s`} ago`}</span>
                </div>
            </div>
            <div className='flex flex-row m-4'>
                <span className='text-blue-700 font-bold '><PersonAddOutlinedIcon/> connect</span>
            </div>
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
        <div className="slider"  onWheel={handleSliderScroll}>
        <Slider ref={sliderRef} {...settings} dots={postData?.images.length === 1 ? false : true}>
              {postData?.images.map((file, index) => (
                  <div key={index} className="flex flex-col items-center cursor-pointer">
                      {/* <span className="mb-2 text-gray-500">{`${index + 1} / ${postData.images.length}`}</span> */}
                      <img src={getImage(file)} alt={`slide-${index}`} className="w-full h-[400px]" />
                  </div>
              ))}
          </Slider>
            </div>
        </div>
        <div className='flex flex-row justify-between mx-4 font-thin text-sm'>
            <span>Likes: {postData?.likeCount===0?"":countLike}</span>
            <span>Comments: {postData?.commentCount===0?"":postData?.commentCount}</span>
        </div>
        <div className='flex flex-row justify-between mx-4'>
        <span key={buttonKey} className='mt-2 mb-4 rounded-lg p-4 hover:bg-gray-200 cursor-pointer' onClick={handleLike}>
  {activeLike ? <ThumbUpAltIcon/> : <ThumbUpOffAltIcon/>} {activeLike ? 'Liked' : 'Like'}
</span>

            <span className='mt-2 mb-4 rounded-lg p-4 hover:bg-gray-200 cursor-pointer' onClick={()=>setAddComment(!addComment)}><AddCommentOutlinedIcon/> Comment</span>
            <span className='mt-2 mb-4 rounded-lg p-4 hover:bg-gray-200'><IosShareOutlinedIcon/> Share</span>

        </div>
        {addComment && (
          <div className='flex flex-col'>
          <div className='flex flex-row  mx-4 mb-4'>
          {/* <img className='rounded-full h-12 w-12' src={getImage(user?.image) ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"}/> */}
          <textArea
                name="commentContent"
                className='text ml-2 p-2 w-[85%] h-12 rounded-xl border border-gray-200 mb-4'
                placeholder='Add Your Comment'
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
            />
            <span className='ml-1 mt-3 text-blue-500 cursor-pointer' onClick={handleAddComment} ><SendIcon/></span>
            

        </div>
        <div className=''>
            <Comments />
            </div>
            </div>
        )}
      
    </div>
  )
}

export default Post
