import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}))

const Likes = () => {
  const classes = useStyles()

  return (
    <div className="like-btn">
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
      <label htmlFor="icon-button-file">
        <IconButton color="secondary" aria-label="upload picture" component="span">
          <FavoriteIcon/>
        </IconButton>
      </label>
    </div>
  )
}


export default Likes