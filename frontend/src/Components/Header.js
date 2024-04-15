import React from 'react';
import logo from "../public/logo.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        navigate("/profile");
    };

    const handleLogOut = ()=>{

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
                <button className='p-2 mx-2 text-xl font-semibold' onClick={()=>navigate("/")}><HomeIcon/></button>
                <button className='p-2 mx-2 text-xl font-semibold'><CampaignIcon/></button>
                <button className='p-2 mx-2 text-xl font-semibold'><ChatIcon/></button>
                {/* <img className='h-14 w-14 mx-4 mr-8 mt-2 rounded-full' src={user.avatar ?? "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="Profile" onClick={handleClick} /> */}

                {/* added menu type on profile click */}
                <Menu>
                <MenuButton className="mt-3"  rightIcon={<ArrowDropDownIcon/>}>
                    <Avatar size='md' cursor='pointer' name={user?.fullName??"Guest"} src={user?.avatar}/>
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
                    <button className='p-2 mx-2 text-xl font-semibold'onClick={()=>navigate()}><HomeIcon/></button>
                    <MenuDivider/>
                    <button className='p-2 mx-2 text-xl font-semibold'><CampaignIcon/></button>
                    <MenuDivider/>
                    <button className='p-2 mx-2 text-xl font-semibold'><ChatIcon/></button>
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
                        <Avatar size='md' cursor='pointer' name={user?.fullName??"Guest"} src={user?.avatar}/>
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
                            <Input placeholder='Search by name or email' mr={2} />
                            <Button 
                            // onClick={handleSearch}
                            >
                                Go
                            </Button>
                        </Box>
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
