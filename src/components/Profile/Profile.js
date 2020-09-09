import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import "../../styles/Profile.css"
import Loading from "../Loading/Loading"

const Profile = (props) => {
	console.log("Profile Prop:", props.user)
	if (!props.user) {
		return (
			<div className="profile-display">
				<Loading/>
				<VideoGrid/>
			</div>
		)
	}
	return (
		<div className="profile-display">
			<UserInfo user={props.user}/>
			<VideoGrid/>
		</div>
	)
}


export default Profile