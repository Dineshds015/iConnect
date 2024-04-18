import React from 'react'
import MyConnection from './MyConnection'
import PeopleYouMayKnow from './PeopleYouMayKnow'
import FriendRequest from './FriendRequest'

const Network = () => {
  return (
    <>
    <div className='grid grid-cols-12 h-[100vh]'>
    {/* for medium and above */}
        <div className='hidden lg:block lg:col-span-2'></div>
        <div className='hidden md:block md:col-span-5 lg:col-span-3 m-2 mt-24 '>
            <MyConnection/>
        </div>
      
      <div className='hidden md:block md:col-span-7 md:mr-2  lg:col-span-6 mt-24 w-full overflow-x-hidden overflow-y-auto'>
        <FriendRequest/>
        <PeopleYouMayKnow/>
      </div>
      <div className='hidden lg:block lg:col-span-1 '></div>
    </div>

    {/* for small screen */}
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    <div className='col-span-12 sm:col-span-10 md:hidden mt-24'>
      <MyConnection/>
      <PeopleYouMayKnow/>
    </div>
    <div className='hidden sm:block sm:col-span-1 md:hidden'></div>
    </>

  )
}

export default Network
