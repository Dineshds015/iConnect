import React, { useState } from 'react';
import logo from "../public/logo.png";
import google from "../public/google.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { validateFormData } from '../helper/validator'; // Import the validator
import {Link} from "react-router-dom";
import Alert from '../helper/alert';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: ""
  });

  const [errors, setErrors] = useState({}); // State to store validation errors
  const [showOtp, setShowOtp] = useState(); // State to control the visibility of OTP section
  const [verifyClicked, setVerifyClicked] = useState(false); // State to track if verify button is clicked

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: '' // Clear the error message when input changes
    });
  };

  //Sending email to server for the OTP
  
  
  const sendEmailToOtp = async () => {
    try {
      const isExist = await axios.post("http://localhost:8000/auth/checkExistingUser", { email: formData.email});
      console.log("dataaaa:",isExist.data.message);
      if(isExist.data.message!=="existingUser"){
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
    const formErrors = validateFormData(formData); // Validate the form data
    const response=await sendEmailToOtp();
    // console.log("res" ,response.data);
    if (Object.keys(formErrors).length === 0) {
      
      if (response && response.data.message==="existingUser"){
        console.log("...");
        Alert.warning("This Email is Already Registered!");
      }else{
        console.log("https logs");
        setVerifyClicked(true); // Set verifyClicked to true when verify button is clicked
        setShowOtp(true); // Show the OTP section
      }
      //await sendEmailToOtp(); // Send email to OTP endpoint
      
      if (response && response.data.message==="existingUser"){
        console.log("...");
        Alert.warning("This Email is Already Registered!");
      }else{
        console.log("https logs");
        setVerifyClicked(true); // Set verifyClicked to true when verify button is clicked
        setShowOtp(true); // Show the OTP section
      }
      //await sendEmailToOtp(); // Send email to OTP endpoint
    } else {
      setErrors(formErrors); // Set validation errors to display to the user
    }
  };
  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/verify", { email: formData.email, otp: formData.otp });
      console.log(response); // Log the response data if needed
      
      return response.data; // Return the response data for further processing
    } catch (error) {
      console.log("Error verifying OTP:", error.message);
      //throw error; // Re-throw the error to handle it in the calling code
    }
  };
  
  // Function to resend OTP
  const resendOTP = async () => {
    try {
      await axios.post("http://localhost:8000/auth/resendOtp", { email: formData.email });
      Alert.success('OTP resent successfully.');
    } catch (error) {
      console.error("Error resending OTP:", error.message);
      alert('An error occurred while resending OTP. Please try again later.');
    }
  };

  const submitReg = async(e) => {
    e.preventDefault();
    const result = await verifyOtp(formData.email, formData.otp);
    result?console.log("msg: ",result.message):console.log("msg: none");
    if (result && result.message === 'OTP verified successfully') {
      axios.post("http://localhost:8000/auth/register", formData)
        .then((res) => {
          console.log(res.data);
          Alert.success("Registered Successfully");
          setTimeout(() => {
            navigate('/login');
          }, 4000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if(result && result.message ==="Invalid OTP"){
      Alert.error('Incorrect OTP');
    }
  };

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
    <ToastContainer/>
    <div className="w-[90%] ml-8 sm:ml-0 h-80vh flex flex-col sm:w-96 md:w-1/2 xl:w-1/3 items-center absolute top-72  sm:left-1/4 md:left-1/4 xl:left-[35%]   bg-white  shadow-2xl rounded-3xl">
      
        <img className="rounded-2xl h-52 w-52 mx-4" src={logo} alt="logo" />
        <form className='flex flex-col w-[100%]'>
          <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="name" placeholder='Enter Your Name' onChange={handleInputChange} disabled={showOtp}/>
          {errors.name && <span className="ml-auto mr-6 text-red-600">{errors.name}</span>}
          <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="text" name="email" placeholder='Enter Your Email' onChange={handleInputChange} disabled={showOtp}/>
          {errors.email && <span className="ml-auto mr-6 text-red-600">{errors.email}</span>}
          <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="password" name="password" placeholder='Enter Your Password' onChange={handleInputChange} disabled={showOtp}/>
          {errors.password && <span className="ml-auto mr-6 text-red-600">{errors.password}</span>}
          <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="password" name="cPassword" placeholder='Confirm Password' onChange={handleInputChange} disabled={showOtp}/>
          {errors.cPassword && <span className="ml-auto mr-6 text-red-600">{errors.cPassword}</span>}

          {!showOtp ? (
            <button className='mx-4 px-4 my-2 mb-8 border border-solid w-auto h-12 rounded-full bg-blue-500 font-bold text-2xl' type="button" onClick={handleVerifyClick}>Verify</button>
          ) : (
            <div className='flex flex-col'>
              <div className='flex flex-row'>

                  <input className='mx-4 px-4 my-2 border border-solid w-auto h-12 rounded-full' type="password" name="otp" placeholder='Enter 6 digit OTP' onChange={handleInputChange} />
                  <button className='-ml-20 px-4 my-2 pb-0 border border-solid w-auto h-12 rounded-full bg-blue-500 font-bold text-2xl' type="submit" onClick={submitReg}>Register</button>
                  </div>

                <button className='mx-4 cursor-pointer mb-8' type="button" onClick={resendOTP}>Resend OTP</button>

                  {/* <button className='mx-4 px-4 my-2 pb-0 border border-solid w-auto h-12 rounded-full bg-blue-500 font-bold text-2xl' type="submit" onClick={submitReg}>Register</button> */}

              </div>

          )}
        </form>

      {/* <div className='flex flex-col justify-center m-10 mt-44'>
        <button className='mx-4 px-4 my-2 border border-solid w-96 h-12 rounded-full bg-teal-300 text-2xl flex items-center justify-center' type="submit"><img className='h-8  mr-2' src={google} alt='Google Logo' />Login In with Google</button>
        <button className='mx-4 px-4 my-2 border border-solid w-96 h-12 rounded-full bg-teal-300 text-2xl flex items-center justify-center' type="submit"><img className='h-8 border border-solid mr-2' src='https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' alt='LinkedIn Logo' />Login In with LinkedIn</button>
        <Link to="/Login" className='ml-32 cursor-pointer'>Already have an account? Sign In</Link>
      </div> */}
      <Link to="/Login" className=' cursor-pointer mb-4 text-blue-400 font-semibold'>Already have an account? Sign In</Link>
    </div>
    </>
  )
}

export default Signup;
