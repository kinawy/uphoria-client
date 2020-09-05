import React, { useState, useRef } from 'react';
import VideoFooter from './VideoFooter';
import '../styles/Video.css'

const Video = (props) => {
    // states
    let [playing, setPlaying] = useState(true)
    let [username, setUsername] = useState('@username')
    let [description, setDescription] = useState('This is a video description')

    const videoRef = useRef(null)
    
    const handleVideoPlay = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video
                className="video-player" 
                loop 
                ref={videoRef}
                onClick={handleVideoPlay}
                src="https://v16m.tiktokcdn.com/968261f71e674568d6a0c340b500ea5f/5f544175/video/tos/useast2a/tos-useast2a-ve-0068c002/bfc701585e3e4ff7b721c80df5d4596e/?a=1233&br=3594&bt=1797&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009051954460101890360815535F484&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajZyc3B1bTttcjMzZzczM0ApZWc4ZTwzPGU1Nzg7NWc0NmdqaTYtbG5mMWVfLS0uMTZzc2JfYS4xMTUuNjYuMWAxLV46Yw%3D%3D&vl=&vr=" 
            ></video>
            <VideoFooter username={username} description={description}/>
            
            {/* video sidebar component goes here */}
        </div>
    )
}

export default Video