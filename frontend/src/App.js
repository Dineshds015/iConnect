import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Educationform from './Components/Forms/Education.form';
import Experienceform from './Components/Forms/Experience.form';
import Projectform from './Components/Forms/Project.form';

function App() {
  return (
   <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path = "/edu" element={<Educationform/>}/>
        <Route path = "/exp" element={<Experienceform/>}/>
        <Route path = "/proj" element={<Projectform/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
