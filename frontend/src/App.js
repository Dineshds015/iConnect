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
import store from './utlis/store';
import MyChats from './Components/Chats/MyChats';
import Network from './Components/My Network/Network';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className=''>
        {/* Your common components can go here */}
        <Header />
        {/* Use Routes to define your routes */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/verify/:userId" element={<VerificationPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}  />
          <Route path="/profile" element={<Profile/>}/>
          <Route path = "/:user_id/profile" element = {<OtherUserProfile />}/>  
          <Route path="/chat" element={<MyChats/>} />
          <Route path="/mynetwork" element={<Network/>}/>
          {/* <Route path = "/:user_id/profile" element = {<OtherUserProfile />}/> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
