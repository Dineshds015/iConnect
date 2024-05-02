import axios from 'axios';

export const fetchUserProfile = async (setState) => {
  try {
    // Send request to backend to fetch user profile
    const response = await axios.get('http://localhost:8000/profile/details');
    setState(response.data); // Update state with fetched user profile data
  } catch (error) {
    console.error('Error fetching user profile:', error);
    window.location.href="/login";
  }
};

  export const logoutUser = async (state) => {
    try {
      await axios.get("http://localhost:8000/auth/logout");
      window.location.href="/login";
    } catch (error) {
      console.error("Error in logout:", error.message);
    }
  };

  export const isLogin=async()=>{
    try {
      await axios.get("http://localhost:8000/profile/details");
      return true;
    } catch (error) {
      return false;
    }
  }