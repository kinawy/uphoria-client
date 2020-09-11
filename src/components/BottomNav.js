import React from "react"
import {Link, Redirect} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import "../styles/BottomNav.css"

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      bottom: 0,
      position: "fixed",
      zIndex: 10,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: 10,
    },
  },
}))

const BottomNav = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState("home")

  return (
    <div className="btm-nav">
      <BottomNavigation
        className="real-btm-nav"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}>
        <BottomNavigationAction
          value="home"
          component={Link}
          to={{
            pathname: "/",
            triggerRefetch: true
          }}
          label="Home"
          icon={<HomeOutlinedIcon />}
        />

        <BottomNavigationAction
          value="upload"
          component={Link}
          to="/create"
          label="Upload"
          icon={<AddCircleIcon />}
        />
        <BottomNavigationAction
          value="profile"
          component={Link}
          to="/profile"
          label="Profile"
          icon={<PermIdentityIcon />}
        />
      </BottomNavigation>
    </div>
  )
}

export default BottomNav
