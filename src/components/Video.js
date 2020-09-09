import React, { useState, useRef } from "react"
import VideoFooter from "./VideoFooter"
import "../styles/Video.css"
import SideBar from "./SideBar"
import TopNav from "./TopNav/TopNav"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import UserInfo from "./Profile/UserInfo"
import VideoGrid from "./Profile/VideoGrid"
import { useSwipeable, Swipeable } from 'react-swipeable'

const Video = (props) => {
  const queryVideos = gql`
    {
      videos {
        description
        userId {
          id
          username
        }
        videoUrl
        likes
        shares
      }
    }
  `

  return (
    <div className="videos">
      <TopNav />
      <Query query={queryVideos}>
        {({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return `Query Failed: ${error}`

          let videos = data.videos.map((video) => {
            return (
              <div className="Video-Container">
                <SideBar
                  userId={video.userId.id}
                  likes={video.likes}
                  shares={video.shares}
                />
                <VideoFooter
                  username={video.userId.username}
                  description={video.description}
                />
                <video
                  className="videoPlayer"
                  src={`https://res.cloudinary.com/agregis/video/upload/c_scale,g_south_west,l_logo_transparent_wvrps0,w_144/${video.videoUrl}.mp4`}
                  autoPlay={true}
                  loop={true}
                  muted
                />
              </div>
            )
          })

          return videos
        }}
      </Query>
    </div>
  )
}

export default Video
