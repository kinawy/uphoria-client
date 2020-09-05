import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import SendIcon from "@material-ui/icons/Send"

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

export default function Shares() {
  const classes = useStyles()

  return (
    <div className="share-btn">
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
      <label htmlFor="icon-button-file">
        <IconButton aria-label="upload picture" component="span">
          <SendIcon/>
        </IconButton>
      </label>
    </div>
  )
}
