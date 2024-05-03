import React from 'react';
import media from "../public/media.png";
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';


const AddMedia = ({postType,onClose}) => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState([]);
    const [textArea,setTextarea] = useState("")
    const user = useSelector((store) => store.user);
    const sliderRef = useRef(null);

    const handleAddFile = () => {
        fileInputRef.current.setAttribute('multiple', 'multiple');
        fileInputRef.current.click();
    };

    
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const fileNames = files.map(file => file.name); // Extracting only the names of the files
        setSelectedFile([...selectedFile, ...fileNames]);
    };

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: true
        dots:true
    };

    const handleTextarea = (e) =>{
        setTextarea(e.target.value)
    }
    const handleSliderScroll = (e) => {
        if (e.deltaX < 0) {
            sliderRef.current.slickPrev(); // Scroll up, display previous image
        } else if(e.deltaX>0) {
            sliderRef.current.slickNext(); // Scroll down, display next image
        }
    };

    
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("imagess: ",selectedFile);
        axios.post("http://localhost:8000/post/create",{
            content:textArea,
            images:selectedFile,
            postType:postType
        })
        .then((res) => {
            console.log(res.data);
            toast.success("Happy Coding!");
            setTimeout(()=>{
              window.location.reload();
            },2000);
        })
        .catch((err) => {
          console.log(err.message);
        });

        // onClose()
    }

    const getImage = (imgName) => {
        return require(`../public/${imgName}`);
      };

    return (
        
        <div className='absolute mt-20 top-40 md:top-20 sm:ml-4  w-full sm:w-[80%] md:w-[63%] lg:w-[40%] xl:1/3 rounded-xl shadow-2xl shadow-slate-500  bg-blue-100'>
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
        <div className="w-full  rounded-xl p-2">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row justify-between items-center'>
                <img className='h-16 w-16 rounded-full mx-2 mt-2' src={user?.image ? user?.image : "https://cdn-icons-png.freepik.com/512/10302/10302971.png" } alt="dp"/>
                <span className='mt-2 font-bold items-center'>{user?.name ? user?.name : "Guest"}</span>
                </div>
                <div onClick={onClose} className='text-2xl font-bold cursor-pointer'><CloseIcon/></div>
            </div>
            <div className='p-4'>
            <textArea
                    name="content"
                    className='text-xl p-3 w-full h-96 rounded-lg border border-gray-300'
                    placeholder='What do you want to talk about?'
                    value={textArea}
                    onChange={handleTextarea}
                    // style={{ overflow: 'hidden', height: 'auto' }}
            />
            <div className="slider" onWheel={handleSliderScroll}>
    <Slider ref={sliderRef} {...settings}>
        {selectedFile.map((fileName, index) => (
            <div key={index} className="flex flex-col items-center">
                {/* <span className="mb-2 text-gray-500">{`${index + 1} / ${selectedFile.length}`}</span> */}
                <img src={getImage(fileName)} alt={fileName} className="h-80 w-full p-4" />
            </div>
        ))}
    </Slider>
</div>

            </div>
            <div className='flex flex-row justify-between p-4'>
                <img className='h-8 cursor-pointer' src={media} alt="add photos" onClick={handleAddFile}/>
                <button className='h-8 rounded-lg px-2 py-1 bg-blue-500 text-white font-bold hover:bg-blue-600' onClick={handleSubmit}>Post</button>
            </div>
            <input name="images" style={{display : 'none'}} type="file" ref={fileInputRef} onChange={handleFileChange} />
        </div>
        </div>
    );
};

export default AddMedia;
