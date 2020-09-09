import React from "react"
import VideoUserProfile from "./VideoUserProfile"
import Shares from "./Shares"
import Likes from "./Likes"
import Comments from "./Comments"
import "../styles/SideBar.css"


const SideBar = (props) => {
  return (
    <div className="side-bar">
      <VideoUserProfile userId={props.userId}/>
      <Likes likes={props.likes.length}/>
      {/*<Comments/>*/}
      <Shares shares={props.shares}/>
    </div>
  )
}

export default SideBar