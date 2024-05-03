import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import SignUp from './Components/Signup';
// import VerificationPage from './Components/';
import Login from './Components/Login';
import Home from './Components/Home';
import OtherUserProfile from "./Components/OtherUserProfile"
import Profile from './Components/Profile';
import { Provider } from 'react-redux';
import { useState,useEffect } from 'react';
import store from './utlis/store';
import MyChats from './Components/Chats/MyChats';
import Network from './Components/My Network/Network';
import AnnouncementPage from './Components/Announcement/AnnouncementPage';
import JobsPage from './Components/Jobs/JobsPage';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
function App() {

  const [isLogin,setIsLogin]=useState(false);
  useEffect(()=>{
    const loginUser=async()=>{
      try {
        await axios.get("http://localhost:8000/profile/details");
        setIsLogin(true);
      } catch (error) {
        console.log(error);
      }
    }
    loginUser();
  },[]);
  

  return (
    <Provider store={store}>
    <Router>
      <div className=''>
        {/* Your common components can go here */}
        <Header />
        {/* Use Routes to define your routes */}
        <Routes>
          <Route
            path="/signup"
            element={isLogin ? <Navigate to="/" replace /> : <SignUp />}
          />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/verify/:userId" element={<VerificationPage />} /> */}
          <Route
            path="/login"
            element={isLogin ? <Navigate to="/" replace /> : <Login />}
          />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />}/>
          {/* <Route path="/" element={<Home />}  /> */}
          <Route path="/profile" element={<Profile/>}/>
          <Route path = "/:user_id/profile" element = {<OtherUserProfile />}/>  
          <Route path="/chat" element={<MyChats/>} />
          <Route path="/mynetwork" element={<Network/>}/>
          <Route path = "/announcements" element={<AnnouncementPage/>}/>
          <Route path = "/jobs" element={<JobsPage/>}/>
          {/* <Route path="/myConnections" element={<MyConnectionPage/>}/> */}
          {/* <Route path = "/:user_id/profile" element = {<OtherUserProfile />}/> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;