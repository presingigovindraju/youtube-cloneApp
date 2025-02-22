import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import './Components/Navbar/Navbar.css'
import './index.css'
import { Routes,Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";


const App = ()=>{


    const [sidebar,setSidebar] = useState(true)


    return (
        <div>
            <Navbar setSidebar={setSidebar}/>
            <Routes>
                <Route path="/" element={<Home sidebar={sidebar}/>}/>
                <Route path="/video/:categoryId/:videoId" element={<Video />}/>
            </Routes>
            <Sidebar />
        </div>
    )
}

export default App