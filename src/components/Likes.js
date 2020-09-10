import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import FavoriteIcon from "@material-ui/icons/Favorite"

const Likes = (props) => {
  const [color, setColor] = useState("default")

  const toggleClick = (e) => {
  	props.handleLike()
    if (e.target.color === "secondary") {
      e.target.color = "default"
    } else {
      e.target.color = "secondary"
    }
    setColor(e.target.color)
  }

  return (
    <div className="like-btn">
      <label htmlFor="">
        <IconButton color={color} label="like-btn" component="span" onClick={toggleClick}>
          <FavoriteIcon/>
        </IconButton>
      </label>
	    <p>{props.likes}</p>
    </div>
  )
}


export default Likes