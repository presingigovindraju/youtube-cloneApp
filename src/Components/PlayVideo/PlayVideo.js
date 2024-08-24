import React from "react";
import "./PlayVideo.css"
import like from "../../Images/assets/like.png"
import dislike from "../../Images/assets/dislike.png"
import share from "../../Images/assets/share.png"
import save from "../../Images/assets/save.png"
import { useState,useEffect } from "react";
import { value_converter } from "../../Data";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../Data";
import moment from "moment";
import axios from "axios";


const PlayVideo = ()=>{

    const {videoId} = useParams()

    const [apiData,setApiData] = useState(null);
    const [channelData,setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([])

    // const fetchVideoData = async ()=>{
    //     const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    //     await fetch(videoDetail_url).then(res=>res.json()).then((data)=>setApiData(data.item[0]))
    // }

  async  function fetchVideoData(){
                   try{
                       const videoDetail_url  = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
                           setApiData(videoDetail_url.data.item[0])
                   }
                   catch(data){console.log(data)}
         }
         

    const fetchOtherData = async ()=>{
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
    
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData();
    },[videoId])
    
    useEffect(()=>{
        if (apiData) {
        fetchOtherData();
    }
    },[apiData])


    return (
        <div className="play-video">
            {/* <video src={video} controls autoPlay muted></video> */}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views & bull: {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
              <div>
              <span><img src={like} alt="likeImg"/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
              <span><img src={dislike} alt="dislikeImg"/>2</span>
              <span><img src={share} alt="shareImg"/>share</span>
              <span><img src={save} alt="saveImg"/>save</span>
              </div>
            </div>
            <hr/>
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="channelImg"/>
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
                </div>
                <button>Subscribed</button>
            </div>
            <div className="video-description">
                <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
            <hr/>
            <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
            {commentData.map((item,index)=>{
                return (
                <div key={index}  className="comment">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user_profileImg"/>
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                            <img src={value_converter(item.snippet.topLevelComment.snippet.likeCount)} alt="likeImg"/>
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} alt="dislikeImg" />
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
        
    )
}

export default PlayVideo