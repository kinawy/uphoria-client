import React, { useState, useEffect } from "react"
import IconButton from "@material-ui/core/IconButton"
import FavoriteIcon from "@material-ui/icons/Favorite"

const Likes = (props) => {
  const [color, setColor] = useState("default")

  const toggleClick = (e) => {
    props.handleLike()
  }

  useEffect(() => {
    if (props.likes.includes(props.userId)) setColor("secondary")
    else setColor("default")
  }, [props.userId, props.likes])

  return (
    <div className="like-btn">
      <label htmlFor="">
        <IconButton
          color={color}
          label="like-btn"
          component="span"
          onClick={toggleClick}>
          <FavoriteIcon />
        </IconButton>
      </label>
      <p>{props.likes.length}</p>
    </div>
  )
}

export default Likes
