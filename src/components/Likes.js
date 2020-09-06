import React, {useState} from "react"
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
  const [color, setColor] = useState("primary")

  const classes = useStyles()

  const toggleClick = (e) => {
    if (e.target.color === "secondary") {
      e.target.color = "primary"
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
    </div>
  )
}


export default Likes