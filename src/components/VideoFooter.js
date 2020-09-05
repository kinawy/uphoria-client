import React from 'react';
import '../styles/VideoFooter.css';

const VideoFooter = (props) => {
    console.log(props.username)
    console.log(props.description)
    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <h3>{props.username}</h3>
                <p>{props.description}</p>
            </div> 
            <img  
                className="videoFooter-record"
                src="https://static.thenounproject.com/png/934821-200.png"
            />
        </div>
    )
}

export default VideoFooter