import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'

const Navbar = () => {
    return (
        <div className="container">
           <div className="left">
           <img className="logo"
            // src="./logo2.png"
            alt=""
          />
          <span className="home1">Home</span>
          <span className="home1">Series</span>
          <span className="home1">Movies</span>
          <span className="home1">New and Popular</span>
          <span className="home1">My List</span>
           </div> 
           <div className="right">
               <Search className="icons"/>
               <span className="ic">KID</span>
               <Notifications className="icons"/>
               <img className="imgnav" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50" alt=""/>
               <div className="nav-profile">
               <ArrowDropDown className="icons"/>
               <div className="nav-option">
                   
                   <span className="home1">Logout</span>
               </div>
               </div>
               
           </div>
        </div>
    )
}

export default Navbar
