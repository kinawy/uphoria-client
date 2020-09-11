import React, {useState,useEffect} from 'react';
import muteLogo from '../assets/mute.png'
import unmuteLogo from '../assets/unmute.png'
import "../styles/SideBar.css"


const MuteLogo = (props) => {
    let [logo, setLogo] = useState(unmuteLogo)

    useEffect(() => {
    if(props.muted) {
        setLogo(unmuteLogo)
    } else {
        setLogo(muteLogo)
    }
    }, [props.muted])

    return (
        <div>
            <img src={logo} onClick={props.handleMute} className="muteLogo" alt="mute/unmute"/>
        </div>
    )
}

export default MuteLogo