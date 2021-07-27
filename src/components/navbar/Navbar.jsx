import { ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="logo.PNG" alt=""/>
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right"></div>
            <Search className="icon" />
            <span>KID</span>
            <Notifications className="icon"/>
            <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
            <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>
            


        </div>
        </div>
    )
}

export default Navbar;
