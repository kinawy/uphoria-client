import React from "react"
import {Redirect} from "react-router-dom"

const OpenVideo = (props) => {
  console.log("clicked the open video")
  return(
    <>
    <Redirect to={{ pathname:"/", userId: props.userId}}/>
    </>
  )
}

export default OpenVideo