import React,{useEffect, useState}from 'react';
// import logo from "../public/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {logoutUser} from '../helper/fetchData';
import MyConnection from './My Network/MyConnection';
import PeopleIcon from '@mui/icons-material/People';
// import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Button,
    Avatar,
    Tooltip, Text,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Box,
    Input
  } from '@chakra-ui/react'
  import MenuIcon from '@mui/icons-material/Menu';
  import {useDisclosure} from '@chakra-ui/hooks'
  import ChatIcon from '@mui/icons-material/Chat';
import FriendRequest from './My Network/FriendRequest';
  
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [errors, setErrors] = useState({}); // State to store validation errors
    const [userr,setUserr]=useState(null);
    const [isLogin,setIsLogin]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [formData, setFormData]=useState([]);
    const handleClick = () => {
        navigate("/profile");
    }
    
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

    const getImage = (imgName) => {
        return require(`../public/${imgName}`);
    };
    
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Send request to backend to fetch userr profile
                const response = await axios.get('http://localhost:8000/profile/details');
                setUserr(response.data); // Update state with userr information
                setIsLogin(true);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching userr profile:', error);
            }
        };
        fetchUserProfile();
    },[]);


      useEffect(()=>{
        
        const value=formData[''];
        console.log("usr: ",value);
      });
      
    const handleLogOut = async()=>{
        try {
            await axios.get("http://localhost:8000/auth/logout");
            navigate("/login");
          } catch (error) {
            console.error("Error in logout:", error.message);
          }
    }
    return (
        <div className='flex flex-row justify-between fixed top-0 left-0 right-0 bg-white z-10  px-6 py-2 shadow-lg  bg-gradient-to-r from-green-100 to-blue-300'>
            {/* css for medium and large devices */}

            {/* logo and search */}
            <div className='hidden md:flex col-span-4 '>
                {/* <img className="h-14 px-4 mx-4" src={logo} alt="logo" /> */}
                <span className='mt-4 mr-6 font-serif text-2xl'>iConnect</span>

                {/* Chakra for making search as a buttom and onClick adding a drawer + have a tooltip saying search user */}
                <Tooltip label="Search Users to Chat" hasArrow placement='bottom-end'>
                <Button className='bg:transparent mt-3 mx-2' onClick={onOpen}>
                    <SearchIcon/>
                    <Text display={ { base: "none", md: "flex"}} px="4">
                        Search user
                    </Text>
                </Button>
            </Tooltip>
            
            </div>

            {/* home announcemnet and avatar */}
            <div className='hidden md:flex col-span-8 h-16 justify-self-end '>
           
            <button className='p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/")}><HomeIcon/></button>
                <button className=' p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/announcements")}><CampaignIcon/></button>
                <button className=' p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/jobs")}><BusinessCenterOutlinedIcon/></button>
                <button className='p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/mynetwork")}><PeopleIcon/></button>
                <button className='p-2 mx-2 text-xl font-semibold' onClick={()=>navigate("/chat")}><ChatIcon/></button>
                {/* <img className='h-14 w-14 mx-4 mr-8 mt-2 rounded-full' src={user.avatar ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="Profile" onClick={handleClick} /> */}

                {/* added menu type on profile click */}
                {isLogin &&
                <Menu>
                    <MenuButton className="mt-3"  rightIcon={<ArrowDropDownIcon/>}>
                        <Avatar size='md' cursor='pointer' name={userr?.name??"Guest"} src={getImage(userr.image)}/>
                    </MenuButton>
                    <MenuList>
                    {/* <ProfileModel user={user}> */}
                        <MenuItem onClick={handleClick}>My Profile</MenuItem>
                        <MenuDivider/>
                        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                    {/* </ProfileModel> */}
                    </MenuList>
                </Menu>}
            </div>


            {/* css for mobile */}
            {/* a drop down of all the icons */}
            <div className='flex flex-row justify-between md:hidden'>
            <Menu>
                <MenuButton className="mt-3"  rightIcon={<MenuIcon/>}>
                {/* hamburger */}
                    <MenuIcon/> 
                </MenuButton>
                {/* list of drop down */}
                <MenuList className='flex flex-col'>
                <button className='p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/")}><HomeIcon/></button>
                    <MenuDivider/>
                    <button className=' p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/announcements")}><CampaignIcon/></button>
                    <MenuDivider/>
                    <button className=' p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/jobs")}><BusinessCenterOutlinedIcon/></button>
                    <MenuDivider/>
                    <button className='p-2 mx-2 text-xl font-semibold' onClick={()=> navigate("/mynetwork")}><PeopleIcon/></button>
                    <MenuDivider/>
                <button className='p-2 mx-2 text-xl font-semibold' onClick={()=>navigate("/chat")}><ChatIcon/></button>
                <MenuDivider/>
                    <Tooltip label="Search Users to Chat" hasArrow placement='bottom-end'>
                        <Button bg='white' onClick={onOpen}>
                        <SearchIcon/>
                            <Text display={ { base: "none", md: "flex"}} px="4">
                                Search user
                            </Text>
                        </Button>
                    </Tooltip>
                </MenuList>
            </Menu>
            </div>

            
            <span className='md:hidden mt-4 mr-6 font-serif text-2xl'>Campus Connect</span>
            {/* avatar*/}
            <div className="block md:hidden">
                <Menu >
                    <MenuButton className="mt-3"  rightIcon={<ArrowDropDownIcon/>}>
                        <Avatar size='md' cursor='pointer' name={userr?.name??"Guest"} src={userr?.image}/>
                    </MenuButton>
                    <MenuList>
                    {/* <ProfileModel user={user}> */}
                        <MenuItem onClick={handleClick}>My Profile</MenuItem>
                        <MenuDivider/>
                        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                    {/* </ProfileModel> */}
                    </MenuList>
                </Menu>
            </div>
           
            

            {/* drawer for search common for all devices */}
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        Search User
                    </DrawerHeader>
                    <DrawerBody>
                        <Box display={'flex'} pb={2}>
                        {/* value={search} onChange={(e)=> setSearch(e.target.value)} */}
                            <Input placeholder='Search by name or email' mr={2} onChange={handleInputChange}/>
                            <Button 
                            // onClick={handleSearch}
                            >
                                Go
                            </Button>
                        </Box>
                        <label >{formData['']}</label>
                        {formData[''] && (
                            <FriendRequest search={formData['']} panel="searching"/>
                        )}
                        {/* {loading ? <ChatLoading/> : (
                            searchResult?.map(user=> (

                                <UserListItem key={user._id} user={user} handleFunction={()=>accessChat(user._id)}/> 
                                
                            ))
                        ) }
                    */}
                </DrawerBody>
            </DrawerContent>
            
            </Drawer>
        </div>
    );
};

export default Header;
