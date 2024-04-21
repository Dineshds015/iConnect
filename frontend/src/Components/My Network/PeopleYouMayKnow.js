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
    // const users = [
    //     {
    //       name: "John Doe",
    //       headline: "Software Engineer"
    //     },
    //     {
    //       name: "Alice Smith",
          
    //       headline: "Graphic Designer"
    //     },
    //     {
    //       name: "Bob Johnson",
          
    //       headline: "Data Analyst"
    //     },
    //     {
    //       name: "Emily Davis",
          
    //       headline: "Marketing Manager"
    //     },
    //     {
    //       name: "Michael Wilson",
    //       headline: "Product Manager"
    //     },
    //     {
    //       name: "Olivia Martinez",
          
    //       headline: "UI/UX Designer"
    //     },
    //     {
    //       name: "Ethan Taylor",
          
    //       headline: "Web Developer"
    //     },
    //     {
    //       name: "Sophia Anderson",
         
    //       headline: "Content Writer"
    //     },
    //     {
    //       name: "Noah Clark",
    //       headline: "SEO Specialist"
    //     },
    //     {
    //       name: "Ava Baker",
         
    //       headline: "Project Manager"
    //     }
    //   ];
      
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
