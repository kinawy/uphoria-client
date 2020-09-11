import React, { useState} from "react"
import VideoFooter from "./VideoFooter"
import "../styles/Video.css"
import SideBar from "./SideBar"
import TopNav from "./TopNav/TopNav"

const Video = (props) => {
  let [muted, setMuted] = useState(true)
  let video = props.video

    const handleMute = () => {
      if(muted) {
        setMuted(false)
      } else {
        setMuted(true)
      }
    }

    const handleUnmute = () => {
      setMuted(true)
    }

    return (
      <div className="videos">
        <TopNav />
        <div className="Video-Container" key={video.id}>
          <SideBar
            currentUser={props.currentUser}
            videoId={video.id}
            userId={video.userId.id}
            likes={video.likes}
            shares={video.shares}
            muted={muted}
            handleMute={handleMute}
          />
          <VideoFooter
            username={video.userId.username}
            description={video.description}
          />
          <video
            className="videoPlayer"
            src={`https://res.cloudinary.com/agregis/video/upload/c_scale,g_south_west,l_logo_transparent_wvrps0,w_144/${video.videoUrl}.mp4`}
            loop={true}
            autoPlay
            muted={muted}
            onTouchEnd={handleUnmute}
          />
        </div>

      </div>
    )
}

export default Video
