import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import {Redirect} from 'react-router-dom'
import Logout from "../Logout/Logout"
import "../../styles/Profile.css"

const Profile = (props) => {
	console.log("Profile Prop:", props.user)

	if (!props.user) return <Redirect to="/auth"/> 

	return (
		<div className="profile-display">
			<Logout handleLogout={props.handleLogout}/>
			<UserInfo user={props.user}/>
			<VideoGrid/>
		</div>
	)
}


export default Profile