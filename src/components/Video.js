import React, { useState, useRef } from 'react';
import VideoFooter from './VideoFooter';
import '../styles/Video.css'
import SideBar from "./SideBar"
import TopNav from "./TopNav/TopNav"


const Video = (props) => {
    // states
    let [playing, setPlaying] = useState(true)
    let [username, setUsername] = useState('@username')
    let [description, setDescription] = useState('This is a video description')

    return (
	    <div className="videoPlayer">
		    <TopNav />
		    <SideBar />
		    <VideoFooter username="@ExampleUsername" description="This is a video description"/>
	    </div>
    )
}

export default Video