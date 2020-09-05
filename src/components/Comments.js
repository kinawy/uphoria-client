import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import CommentIcon from "@material-ui/icons/Comment"

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

export default function Comments() {
  const classes = useStyles()

  return (
    <div className="comment-btn">
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
      <label htmlFor="icon-button-file">
        <IconButton color="secondary" aria-label="upload picture" component="span">
          <CommentIcon/>
        </IconButton>
      </label>
    </div>
  )
}
