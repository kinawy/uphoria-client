import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Icon from "@material-ui/core/Icon"

const UserInfo = (props) => {
	console.log(props)
	console.log("UserInfo Prop:", props.user)

	return (
		<div className="user-info">
			<h4>{props.user.username}</h4>
			<img src="https://rb.gy/yecyjb" className="circle responsive-image"/>
			{/* could be edit or follow/unfollow button depending on user*/}
			<Icon color="secondary">add_circle</Icon>
			<p>{props.user.profile.bio}</p>
			<p className="ig-url">{props.user.profile.instagramUrl}</p>
			<p className="personal-url">{props.user.profile.personalUrl}</p>
		</div>
	)
}

export default UserInfo