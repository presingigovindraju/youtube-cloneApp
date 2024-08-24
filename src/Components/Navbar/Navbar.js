import React from "react";
import './Navbar.css'
import menu_icon from '../../Images/assets/menu.png'
import logo_icon from '../../Images/assets/logo.png'
import search_icon from '../../Images/assets/search.png'
import upload_icon from '../../Images/assets/upload.png'
import more_icon from '../../Images/assets/more.png'
import notification_icon from '../../Images/assets/notification.png'
import profile_icon from '../../Images/assets/jack.png'
import Raju from "../../Images/assets/Raju.jpg"
import { Link } from "react-router-dom";


const Navbar =({setSidebar})=>{


    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="menuImg"/>
                <Link to="/"><img className="logo" src={logo_icon} alt="logoImg" /></Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                  <input type="text" placeholder="search"/>
                  <img src={search_icon} alt="searchImg"/>
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="uploadImg"/>
                <img src={more_icon} alt="moreImg"/>
                <img src={notification_icon} alt="notificationImg"/>
                <img className="user-icon" src={Raju} alt="profileImg"/>
            </div>
        </nav>
    )
}

export default Navbar