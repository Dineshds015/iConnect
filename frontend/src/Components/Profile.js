import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditProfile from './EditProfile';
import Educationform from './Forms/Education.form';
// import Skill from './Forms/Skill.form';
import ProjectForm from './Forms/Project.form';
import ExperienceForm from './Forms/Experience.form';
import EditCover from './EditCover';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import EditAvatar from './EditAvatar';
import { postUser } from '../utlis/userSlice';
import camera from "../public/camera.gif"
import pen from "../public/pen.png"

// import YourPost from './YourPost';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const addEducation = useSelector((store) => store.education.addEducation);
  const addExperience = useSelector((store) => store.experience.addExperience);
  const addProject = useSelector((store) => store.project.addProject);

  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [userData, setUserData] = useState();

  const [editCover, setEditCover] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const [editIntro, setEditIntro] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  const fetchData = async () => {
  //  get user details and dispatch to stores
  };

  const handleAddSkill = () => {
    setAddSkill(true);
  };

  const handleAddSkillClose = () => {
    setAddSkill(false);
  };

  const handleCoverClick = () => {
    setEditCover(true);
  };

  const handleEditCoverClose = () => {
    setEditCover(false);
  };

  const handleEditAvatar = () => {
    setEditAvatar(true);
  };

  const handleEditAvatarClose = () => {
    setEditAvatar(false);
  };

  const handleAddProfileSection = () => {
    setEditProfile(true);
  };

  const handleAddProfileSectionClose = () => {
    setEditProfile(false);
  };

  const handleIntro = () => {
    setEditIntro(true);
    setFullName(userData.fullName);
    setHeadline(userData.headline ?? "");
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleIntroSave = async () => {
    // update user details => name and headline
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12 grid-flow-col">
      <div className="hidden xl:block  xl:col-span-1 mx-4"></div>

      {/* 1st col span  */}
      <div className="hidden md:block md:col-span-5 xl:col-span-4 mx-2 mt-[140px]">
        <div className="flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 -mt-10">
          <Education userId={userData?._id} />
        </div>
        <div className="flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Experience userId={userData?._id} />
        </div>
        <div className="flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Project userId={userData?._id} />
        </div>
      </div>

      {/* main span */}
      <div
        className={`col-span-12 md:block md:col-span-7 xl:col-span-6 flex flex-col mt-24 md:mx-2 ${
          editCover || editProfile || addEducation || addSkill || addProject || addExperience
            ? "filter blur-sm"
            : ""
        }`}
      >
        <div className="flex flex-col rounded-2xl shadow-xl bg-white">
          <img
            className="h-[200px] w-full rounded-xl"
            src={userData?.coverImage ? userData?.coverImage : "https://i.pinimg.com/236x/53/aa/af/53aaaff2bd89ab21f55db9b5bb8bd024.jpg"}
            alt="cover Image"
          />
          <div className='absolute top-[120px] right-8 xl:right-40 2xl:right-60'>
    <img className='h-8 w-8 rounded-full' src={camera} alt="edit Cover" onClick={handleCoverClick}/>
  </div>
          
          <div className="h-16 w-16 -mt-[580px] rounded-full"></div>
          <img
            className="h-28 w-28 mt-[470px] ml-4 border-2 border-solid border-white rounded-full cursor-pointer"
            src={userData?.avatar ? userData?.avatar : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"}
            alt="dp"
            onClick={handleEditAvatar}
          />
          <span className="font-mono font-bold text-xl ml-5">
            {editIntro ? <input type="text" value={fullName} onChange={handleNameChange} /> : userData?.fullName || "No name available"}
          </span>
            <img className='h-5 w-5 absolute top-[360px] right-8 xl:right-40 2xl:right-60 cursor-pointer' src={pen} onClick={handleIntro} />  
          <span className=" font-mono my-1 from-neutral-800 ml-5">
            {editIntro ? <input type="text" value={headline} onChange={handleHeadlineChange} /> : userData?.headline ?? "Headlines"}
          </span>
          {editIntro && <button onClick={handleIntroSave}>save</button>}
          <button
            className="w-44 p-2 mx-4 my-1 mb-2 bg-white border border-blue-500 text-blue-500 font-bold rounded-2xl hover:bg-blue-500 hover:border-white hover:text-white"
            onClick={handleAddProfileSection}
          >
            Add Profile Section
          </button>
        </div>

        <div className="md:hidden flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Education userId={userData?._id} />
        </div>
        <div className="md:hidden flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Experience userId={userData?._id} />
        </div>
        <div className="md:hidden flex flex-col rounded-2xl shadow-xl bg-gradient-to-r from-green-100 to-blue-300 mt-2">
          <Project userId={userData?._id} />
        </div>
      </div>

      {editAvatar && <EditAvatar onClose={handleEditAvatarClose} />}
      {editCover && <EditCover onClose={handleEditCoverClose} />}
      {editProfile && <EditProfile onClose={handleAddProfileSectionClose} onSkill={handleAddSkill} />}
      {addEducation && <Educationform />}
      {/* {addSkill && <Skill onCloseForm={handleAddSkillClose} />} */}
      {addProject && <ProjectForm />}
      {addExperience && <ExperienceForm />}

      <div className="hidden xl:block  xl:col-span-1 mx-4"></div>
    </div>
  );
};

export default Profile;
