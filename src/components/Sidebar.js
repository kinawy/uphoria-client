import React from "react"
import VideoUserProfile from "./VideoUserProfile"
import Shares from "./Shares"
import Likes from "./Likes"
import Comments from "./Comments"


const Sidebar = () => {
  return (
    <>
      <VideoUserProfile/>
      <Likes/>
      <Comments/>
      <Shares/>
    </>
  )
}

export default Sidebar