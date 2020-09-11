import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Icon from "@material-ui/core/Icon"
import ProfileButton from "./ProfileButton"
import InstaIcon from "../../assets/instagram.svg"
import LinkIcon from "../../assets/link.svg"

const useStyles = makeStyles({
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
})

const UserInfo = (props) => {
  const classes = useStyles()

  console.log("UserInfo Prop:", props.user)

  return (
    <div className="user-info">
      <h4 className="user-name">{props.user.username}</h4>
      <img
        src="https://rb.gy/yecyjb"
        className="circle responsive-image userImage"
        alt="user-pic"
      />
      <br />
      {/* could be edit or follow/unfollow button depending on user*/}
      <ProfileButton user={props.user} />
      <p>{props.user.profile.bio}</p>
      <p className="ig-url">
        <a href={ props.user.profile.instagramUrl } target="_blank" rel="noopener noreferrer">
          <Icon classes={{ root: classes.iconRoot }}>
            <img className={classes.imageIcon} src={InstaIcon} alt="instagram-icon"/>
          </Icon>{" "}
          {props.user.profile.instagramUrl}
        </a>
      </p>
      <a href={ props.user.profile.personalUrl } target="_blank" rel="noopener noreferrer">
        <Icon classes={{ root: classes.iconRoot }}>
          <img alt="link-icon" className={classes.imageIcon} src={LinkIcon} />
        </Icon>{" "}
        {props.user.profile.personalUrl}
      </a>
      <br />
      <br />
    </div>
  )
}

export default UserInfo
