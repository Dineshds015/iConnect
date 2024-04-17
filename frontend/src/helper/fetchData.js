import axios from 'axios';

const fetchUserProfile = async (state) => {
    try {
      // Send request to backend to fetch user profile
      const response = await axios.get('http://localhost:8000/profile/details');
      state(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      window.location.href="/login";
    }
  };

export default fetchUserProfile;