import React, { useState } from "react"
import VideoUserProfile from "./VideoUserProfile"
import Shares from "./Shares"
import Likes from "./Likes"
import "../styles/SideBar.css"
import gql from "graphql-tag"
import { useMutation } from "react-apollo"
import MuteLogo from "./MuteLogo"

const likeVideoMutation = gql`
  mutation($id: ID!, $isLiking: Boolean, $isUnliking: Boolean) {
    updateVideo(id: $id, isLiking: $isLiking, isUnliking: $isUnliking) {
      likes
    }
  }
`

const shareVideoMutation = gql`
  mutation($id: ID!, $isSharing: Boolean!) {
    updateVideo(id: $id, isSharing: $isSharing) {
      shares
    }
  }
`

const SideBar = (props) => {
  const [likes, setLikes] = useState(props.likes)
  const [shares, setShares] = useState(props.shares)
  const [updateLikes] = useMutation(likeVideoMutation)
  const [updateShares] = useMutation(shareVideoMutation)

  const handleLike = async () => {
    let likeVariable = likes.includes(props.currentUser._id)
      ? { id: props.videoId, isUnliking: true }
      : { id: props.videoId, isLiking: true }

    updateLikes({ variables: likeVariable })
      .then((response) => {
        let newLikes = response.data.updateVideo.likes
        setLikes(newLikes)
      })
      .catch((error) => console.log("Failed on like update: ", error))

  }

  const handleShare = async () => {
    const sharingVideo = await updateShares({
      variables: { id: props.videoId, isSharing: true },
    })
    let newShares = sharingVideo.data.updateVideo.shares
    if (newShares > shares) setShares(newShares)
    else console.log("Failed to share video")
  }

  return (
    <div className="side-bar">
      <VideoUserProfile userId={props.userId} />
      <Likes likes={likes} handleLike={handleLike} userId={props.currentUser._id} />
      {/*<Comments/>*/}
      <Shares shares={shares} handleShare={handleShare} />
      <MuteLogo muted={props.muted} handleMute={props.handleMute} />
    </div>
  )
}

export default SideBar
