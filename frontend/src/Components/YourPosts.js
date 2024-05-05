import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Post from './Post';
import axios from 'axios';
import fetchPost from '../helper/fetchPost';

const YourPosts = ({ user }) => {
    const [userPosts,setUserPosts] = useState(false)
    const [postData,setPostData]=useState([]);

    useEffect(()=>{
        fetchPost(setPostData,"media");
        setUserPosts(true);
    },[]); // Fetch data again when user changes

    return (
        <div className='flex flex-col bg-white m-1 mt-2 rounded-xl shadow-md p-3'>
            <div className='flex flex-row justify-between m-2'>
                <span className='text-xl font-bold'>Your Posts</span>
                {/* <span className='font-bold'><ArrowForwardIcon/></span> */}
            </div>
            <div className='h-[50vh] overflow-x-hidden overflow-y-auto'>
                {postData.length > 0 ? (
                    postData.map(post => <Post key={post._id} postData={post} />)
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
        </div>
    );
};

export default YourPosts;
