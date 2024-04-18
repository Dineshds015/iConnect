import React from 'react'
import ConnectCard from './ConnectCard';

const PeopleYouMayKnow = () => {

    const users = [
        {
          name: "John Doe",
          headline: "Software Engineer"
        },
        {
          name: "Alice Smith",
          
          headline: "Graphic Designer"
        },
        {
          name: "Bob Johnson",
          
          headline: "Data Analyst"
        },
        {
          name: "Emily Davis",
          
          headline: "Marketing Manager"
        },
        {
          name: "Michael Wilson",
          headline: "Product Manager"
        },
        {
          name: "Olivia Martinez",
          
          headline: "UI/UX Designer"
        },
        {
          name: "Ethan Taylor",
          
          headline: "Web Developer"
        },
        {
          name: "Sophia Anderson",
         
          headline: "Content Writer"
        },
        {
          name: "Noah Clark",
          headline: "SEO Specialist"
        },
        {
          name: "Ava Baker",
         
          headline: "Project Manager"
        }
      ];
      
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
