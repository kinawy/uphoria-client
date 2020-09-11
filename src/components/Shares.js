import React from "react"
import IconButton from "@material-ui/core/IconButton"
import SendIcon from "@material-ui/icons/Send"


const Shares = (props) => {

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