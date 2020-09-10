import React, { useState } from "react"
import VideoUserProfile from "./VideoUserProfile"
import Shares from "./Shares"
import Likes from "./Likes"
import "../styles/SideBar.css"
import gql from "graphql-tag"
import { useMutation } from "react-apollo"
import MuteLogo from './MuteLogo'


const likeVideoMutation = gql`
    mutation($id: ID!, $isLiking: Boolean!) {
        updateVideo(id: $id, isLiking: $isLiking) {
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
	const [hasLiked, setHasLiked] = useState(props.likes.includes())
	const [likes, setLikes] = useState(props.likes.length)
	const [shares, setShares] = useState(props.shares)
	const [updateLikes] = useMutation(likeVideoMutation)
  const [updateShares] = useMutation(shareVideoMutation)
  

	const handleLike = async () => {
		const likingVideo = await updateLikes({ variables: { id: props.videoId, isLiking: true } })
		let newLikes = likingVideo.data.updateVideo.likes.length
		if (newLikes> likes) setLikes(newLikes)
		else console.log("Failed to like video")
	}

	const handleShare = async () => {
		const sharingVideo = await updateShares({ variables: { id: props.videoId, isSharing: true } })
		let newShares = sharingVideo.data.updateVideo.shares
		if (newShares > shares) setShares(newShares)
		else console.log("Failed to share video")
  }
  

  return (
    <div className="side-bar">
      <VideoUserProfile userId={props.userId}/>
      <Likes likes={likes} alreadyLiked={hasLiked} handleLike={handleLike}/>
      {/*<Comments/>*/}
      <Shares shares={shares} handleShare={handleShare}/>
      <MuteLogo muted={props.muted} handleMute={props.handleMute}/>
    </div>
  )
}

export default SideBar