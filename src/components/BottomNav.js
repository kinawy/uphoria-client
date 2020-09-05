import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import PublishIcon from "@material-ui/icons/Publish"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"

const useStyles = makeStyles({
  root: {
    width: 375,
  },
})

const BottomNav = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <div className="btm-nav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}>
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Upload" icon={<PublishIcon />} />
        <BottomNavigationAction label="Profile" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </div>
  )
}

export default BottomNav
