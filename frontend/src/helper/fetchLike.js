import axios from 'axios';

const fetchLike = async (state,setLikeCount,postId) => {
    try {
      // Send request to backend to fetch user profile
      console.log("postIDD: ",postId);
      const response = await axios.get('http://localhost:8000/like/fetchLike', {
      params: {
        postId: postId
      }
    });
      console.log(postId, " is ", response.data);
      response.data.status==='true'?state(true):state(false);
      setLikeCount(response.data.likeCount);
    } catch (error) {
      console.error('Error fetching Post Like:', error);
      //window.location.href="/login";
    }
  };

  export default fetchLike;
