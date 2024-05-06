import React, { useState } from 'react'
import logo from "../public/logo.png"
import google from "../public/google.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../helper/alert';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:"",
    newPassword:""
  });

  const [errors, setErrors] = useState({}); // State to store validation errors
  const [showOtp, setShowOtp] = useState(); // State to control the visibility of OTP section
  const [verifyClicked, setVerifyClicked] = useState(false); // State to track if verify button is clicked

  const navigate = useNavigate()
  const handleOnClick = ()=>{
    navigate("/signup")
  }

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    console.log(name);
  }

  const sendEmailToOtp = async () => {
    try {
      const isExist = await axios.post("http://localhost:8000/auth/checkExistingUser", { email: formData.email});
      console.log("dataaaa:",isExist.data.message);
      if(isExist.data.message==="existingUser"){
        const response = await axios.post("http://localhost:8000/auth/sendOtp", { email: formData.email});
        console.log(response.data); // Log the response data if needed
      }
      return isExist;
    } catch (error) {
      console.error("Error sending email:", error.message);
      // Handle error gracefully
    }
  };

  const handleVerifyClick = async () => {
    const response=await sendEmailToOtp();

    // console.log("res" ,response.data);
      if (response && response.data.message!=="existingUser"){
        console.log("...");
        Alert.error("This Email is Not Registered!");
      }else{
        console.log("https logs");
        setVerifyClicked(true); // Set verifyClicked to true when verify button is clicked
        setShowOtp(true); // Show the OTP section
      }
      //await sendEmailToOtp(); // Send email to OTP endpoint
  }

  const verifyOtp = async (e) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/verify", { email: formData.email, otp: formData.otp });
      console.log(response.data); // Log the response data if needed
      if(response.data.message==="Invalid OTP"){
        Alert.error("Incorrect OTP");
      }
      else{
        const response =axios.post("http://localhost:8000/auth/updatePass", formData)
        .then((res) => {
          console.log(res.data);
          //update password
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        })
        .catch((err) => {
          console.error(err.message);
        });
      }
    } catch (error) {
      console.log("Error verifying OTP:", error.message);
       
      //throw error; // Re-throw the error to handle it in the calling code
    }
  };
  const resendOTP = async () => {
    try {
      await axios.post("http://localhost:8000/auth/resendOtp", { email: formData.email});
      Alert.success('OTP resent successfully.');
    } catch (error) {
      console.error("Error resending OTP:", error.message);
      alert('An error occurred while resending OTP. Please try again later.');
    }
  };

  const submitLogin=(e)=>{
    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:8000/auth/login",formData).then((res)=>{
      console.log(res.data);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }).catch((err)=>{
      Alert.error("Invalid Details");
    })
  }

  return (
  <>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
    <div className="w-[90%] ml-8 sm:ml-0 h-80vh flex flex-col sm:w-96 md:w-1/2 xl:w-1/3 items-center absolute top-72  sm:left-1/4 md:left-1/4 xl:left-[35%]   bg-white  shadow-2xl rounded-3xl">
        {/* <div className="flex flex-col items-center"> */}
            <img className="rounded-2xl h-52 w-52 mx-4" src={logo} alt="logo"/>
            <form className='flex flex-col w-[100%]'>
              <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="email" placeholder='Enter Your Email' onChange={handleInputChange}/>
              {!showOtp ?<input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="password" name="password" placeholder='Enter Your Password' onChange={handleInputChange}/> : 
              <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="newPassword" placeholder='Enter New Password' onChange={handleInputChange}/>}
              
              {!showOtp ? (
            
            <button className='mx-4 px-4 my-2 mb-4 border border-solid w-auto h-12 rounded-full bg-blue-500 font-bold text-2xl' type = "submit" onClick={submitLogin}>Sign In</button>
          ) : (
            <div className='flex flex-col mx-4 '>
                <div className='flex flex-row w-[100%]'>
                  <input className=' px-4 my-2 border border-solid w-[75%] h-12 rounded-full' type="password" name="otp" placeholder='Enter 6 digit OTP' onChange={handleInputChange} />
                  <button className=' -ml-20 px-4 my-2 pb-0 border border-solid w-[40%] h-12 rounded-full bg-blue-500 font-bold text-2xl' type="submit" onClick={verifyOtp}>Verify</button>
                  {/* <button className='mx-4 cursor-pointer mb-8' type="button" onClick={resendOTP}>Resend OTP</button> */}
                </div>
                
                  <button className='mx-4 cursor-pointer mb-8' type="button" onClick={resendOTP}>Resend OTP</button>


            </div>
          )}
            </form>
            {!verifyClicked && <button className='mx-4 cursor-pointer mb-8' type="button" onClick={handleVerifyClick}>Forgot Password?</button>}
        <span className='cursor-pointer mb-4 text-blue-400 font-semibold' onClick={handleOnClick}>Don't have an account? Sign Up</span>
    </div> 
</>
  )
}

export default Login