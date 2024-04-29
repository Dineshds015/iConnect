import React,{useEffect,useState} from 'react'
import ConnectCard from './ConnectCard';
import axios from 'axios';

const PeopleYouMayKnow = () => {
  const [users,setUsers]=useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Send request to backend to fetch userr profile
        const response = await axios.get('http://localhost:8000/connection/peopleYouMayKnow');
        setUsers(response.data); // Update state with userr information
        console.log("resData",response.data);
      } catch (error) {
        console.error('Error fetching userr profile:', error);
      }
    };
    fetchUserProfile();
    //console.log(userr.image);
  }, []);
    
      
  return (
    <div className='flex flex-row flex-wrap m-4'>
    {users && users.map((user,idx) => (
        <ConnectCard key={idx} user={user} />
    )
    )}
    </div>
    
  )
}

export default PeopleYouMayKnow
