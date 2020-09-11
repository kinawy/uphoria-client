import React, {useEffect,useState} from 'react';
import ShowVideo from "./ShowVideo"
import {Link} from 'react-router-dom'
import "../../styles/Profile.css"

const UserVideos = (props) => {
  let location = {
    pathname: '/showvideos',
    video: props.video
  }

  return (
    <div>
      <Link to={location}>
        <video
          src={`https://res.cloudinary.com/agregis/video/upload/e_boomerang/eo_1/c_scale,g_south_west,l_logo_transparent_wvrps0,w_144/${props.video.videoUrl}.mp4`}
          autoPlay={true}
          loop={true}
          muted
          className={props.className}
        />
      </Link>
    </div>
  )
}

export default UserVideos