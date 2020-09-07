import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import "../../styles/Profile.css"

const Profile = (props) => {
	console.log("Profile Prop:", props.user)
	return (
		<div className="profile-display">
			<UserInfo user={props.user}/>
			<VideoGrid/>
		</div>
	)
}


export default Profile