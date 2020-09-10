import React from "react"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import SettingsIcon from "@material-ui/icons/Settings"

const ProfileButton = (props) => {
  console.log(props)

  return (
    <>
      <Link to={{ pathname:"/edit", user: props.user}}>
        <IconButton>
          <SettingsIcon className="settingsIcon icon-set"/>
        </IconButton>
      </Link>
    </>
  )
}

export default ProfileButton
