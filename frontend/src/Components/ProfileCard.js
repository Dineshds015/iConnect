import React,{useState,useEffect} from 'react'
import {fetchUserProfile} from '../helper/fetchData'
import { useNavigate } from 'react-router-dom'

const ProfileCard = () => {
    const [userData,setUserData] = useState(null) 
    const navigate = useNavigate()
    useEffect(()=>{
        fetchUserProfile(setUserData);
      })
    
      const NavigateProfile = ()=>{
        navigate("/profile")
      }
    
      const getImage = (imgName) => {
        return require(`../public/${imgName}`);
      };
  return (
    <div className="flex flex-col   rounded-2xl mt-6 shadow-xl bg-gray-50 items-center mx-4">
    <img
      className="h-[100px] w-full rounded-xl"
      src={userData?.coverImage ? userData?.coverImage : "https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"}
      alt="cover Image"
    />    
    <div className="h-12 w-12 -mt-[580px] rounded-full" ></div>
    <img onClick={NavigateProfile}
      className="h-20 w-20 mt-[490px]  border-2 border-solid border-white rounded-full"
      src={userData?.image ? getImage(userData.image) : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"}
      alt="dp"
    />
    <span className="font-mono font-bold text-xl -my-1">
      {userData?.name || "No name available"}
    </span>
    <span className=" font-mono  from-neutral-800 text-sm mb-2">
      { userData?.headline ?? "Headlines"}
    </span>
  </div>
  )
}

export default ProfileCard
