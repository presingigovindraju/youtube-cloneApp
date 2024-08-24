import React from "react";
import './Sidebar.css'
import home from '../../Images/assets/home.png'
import game_icon from '../../Images/assets/game_icon.png'
import automobiles from '../../Images/assets/automobiles.png'
import sports from '../../Images/assets/sports.png'
import entertainment from '../../Images/assets/entertainment.png'
import teach from '../../Images/assets/tech.png'
import music from '../../Images/assets/music.png'
import blogs from '../../Images/assets/blogs.png'
import news from '../../Images/assets/news.png'
import jack from '../../Images/assets/jack.png'
import simon from '../../Images/assets/simon.png'
import tom from '../../Images/assets/tom.png'
import megan from '../../Images/assets/megan.png'
import cameron from '../../Images/assets/cameron.png'


const Sidebar = ({sidebar,category,setCategory})=>{



    return ( 
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="sortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt="homeImg"/><p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt="gameImg"/><p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt="automobilesImg"/><p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt="sportsImg"/><p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt="entertainmentImg"/><p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={teach} alt="teachImg"/><p>Teach</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt="musicImg"/><p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="blogsImg"/><p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt="newsImg"/><p>News</p>
                </div>
                <hr />
                <div className={`subscribed-list ${sidebar?"":"ToClose"}`} >
                    
                    <div className="subcribed-grp"> 
                        {/* <div><h3>Subscribed</h3></div> */}
                  <div className="side-link">
                    <img src={jack} alt="jackImg"/><p>PewDiePie</p>
                  </div>
                  <div className="side-link">
                    <img src={simon} alt="simonImg"/><p>MrBeast</p>
                  </div>
                  <div className="side-link">
                    <img src={tom} alt="tomImg"/><p>Justin Bieber</p>
                  </div>
                  <div className="side-link">
                    <img src={megan} alt="meganImg"/><p>5-minute Crafts</p>
                  </div>
                  <div className="side-link">
                    <img src={cameron} alt="cameronImg"/><p>Nas Daily</p>
                  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar