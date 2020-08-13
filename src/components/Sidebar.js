import React from 'react'
import '../Sidebar.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Button } from '@material-ui/core';

import SidebarOption from '../components/SidebarOption';

function Sidebar() {
    return (
        <div className={'sidebar'}>
            <TwitterIcon/>
            <SidebarOption active={true} Icon={HomeIcon} text={'Home'} />
            <SidebarOption Icon={SearchIcon} text={'Explore'} />
            <SidebarOption Icon={NotificationsIcon} text={'Notifications'} />
            <SidebarOption Icon={EmailIcon} text={'Messages'} />
            <SidebarOption Icon={BookmarkIcon} text={'Bookmarks'} />
            <SidebarOption Icon={ListIcon} text={'Lists'} />
            <SidebarOption Icon={PersonIcon} text={'Profile'} />
            <SidebarOption Icon={MoreHorizIcon} text={'More'} /> 
            <Button>Tweet</Button>
        </div>
    )
}

export default Sidebar;
