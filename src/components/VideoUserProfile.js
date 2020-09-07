import React from "react"
import {
	Link
} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  }
}))

const VideoUserProfile = () => {
  const classes = useStyles()

  return (
    <div className='video-avi'>
	    <Link to="/profile">
	      <Avatar alt="Remy Sharp"
	              src="https://www.gamersdecide.com/sites/default/files/styles/news_images/public/ezgif.com-gif-maker.jpg"
	              className={classes.large}/>
	    </Link>
    </div>
  )
}

export default VideoUserProfile