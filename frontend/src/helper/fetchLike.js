import axios from 'axios';

const fetchLike = async (state,postId) => {
    try {
      // Send request to backend to fetch user profile
      console.log("postIDD: ",postId);
      const response = await axios.get('http://localhost:8000/like/fetchLike', {
      params: {
        postId: postId
      }
    });
      console.log(postId, " is ", response.data);
      if(response.data==='true'){
        state(true);
      }
      else{
        state(false);
      }
    } catch (error) {
      console.error('Error fetching Post Like:', error);
      //window.location.href="/login";
    }
  };

export default fetchLike;