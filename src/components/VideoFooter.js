import React from 'react';

const VideoFooter = (props) => {
    console.log(props.username)
    console.log(props.description)
    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <p>{props.username}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default VideoFooter