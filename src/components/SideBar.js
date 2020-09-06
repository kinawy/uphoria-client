import React from "react"
import VideoUserProfile from "./VideoUserProfile"
import Shares from "./Shares"
import Likes from "./Likes"
import Comments from "./Comments"
import "../styles/SideBar.css"


const SideBar = () => {
  return (
    <div className="side-bar">
      <VideoUserProfile/>
      <Likes/>
      {/*<Comments/>*/}
      <Shares/>
    </div>
  )
}

export default SideBar