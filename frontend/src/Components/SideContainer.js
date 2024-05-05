import React,{useState,useEffect} from 'react'
import AnnouncementAndJobCard from './AnnouncementAndJobCard';
import fetchPost from '../helper/fetchPost';
import Post from './Post';

const SideContainer = ({cType,page}) => {
    const [userPosts,setUserPosts] = useState(false)
    const [postData,setPostData]=useState([]);

    useEffect(()=>{
        fetchPost(setPostData,cType);
        setUserPosts(true);
    },[cType]);

  return (
    <div>
     {page !== "home" ? 
            postData?.map((data) => <Post cType={cType} page={page} key={data?._id} postData={data} />)
            :
            postData?.slice(0, 2).map((data) => <AnnouncementAndJobCard cType={cType} page={page} key={data?._id} postData={data} />)
        }
        
    </div>

  )
}

export default SideContainer
