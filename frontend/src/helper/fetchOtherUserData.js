import axios from 'axios';

export const fetchIsConnected = async (connectionUserId,state) => {
    try {
      // Send request to backend to fetch user profile
      const response = await axios.get('http://localhost:8000/connection/isConnected',{
        params:{
          connectionUserId:connectionUserId
        }
      });
      state(response.data);
      
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user Post:', error);
      //window.location.href="/login";
    }
  };

  export const removeConnection = async (connectionUserId) => {
    try {
      // Send request to backend to fetch user profile
      const response = await axios.post('http://localhost:8000/connection/removeConnection',{connectionUserId:connectionUserId});
      console.log("Connection Removed Successfully");
    } catch (error) {
      console.error('Error Removing user connection:', error);
      //window.location.href="/login";
    }
  };