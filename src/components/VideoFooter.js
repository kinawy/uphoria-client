import React from 'react';

const VideoFooter = (props) => {
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