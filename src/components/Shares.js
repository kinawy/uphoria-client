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

const Shares = (props) => {
  const classes = useStyles()

  return (
    <div className="share-btn">
      <label htmlFor="icon-button-file">
        <IconButton label="share-btn" component="span" onClick={props.handleShare}>
          <SendIcon/>
        </IconButton>
      </label>
	    <p>{props.shares}</p>
    </div>
  )
}

export default Shares