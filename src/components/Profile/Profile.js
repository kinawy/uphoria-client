import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import { Redirect } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import "../../styles/Profile.css"
import Loading from "../Loading/Loading"
import Error from "../Error"
import Logout from "../Logout/Logout"
import Spinner from "../Spinner/Spinner"

const Profile = (props) => {

  let userId = ""
  let queryUserInfo
  if (!props.user) return <Redirect to="/auth" />

  if (!props.location.userId) {
    userId = props.currentUser._id
    queryUserInfo = gql`
      query User($id: ID!) {
        user(id: $id, privilegedSecret: "antiTikTok") {
          username
          id
          email
          birthday
          name
          profile {
            bio
            instagramUrl
            personalUrl
          }
          videos {
            id
            videoUrl
          }
        }
      }
    `
  } else {
    userId = props.location.userId
    queryUserInfo = gql`
      query User($id: ID!) {
        user(id: $id) {
          username
          profile {
            bio
            instagramUrl
            personalUrl
          }
          videos {
            id
            videoUrl
          }
        }
      }
    `
  }

  return (
    <div className="profile-display">
      <Query
        query={queryUserInfo}
        variables={{ id: userId }}
        fetchPolicy="no-cache">
        {({ loading, error, data, refetch }) => {
          if (loading) return <Spinner />
          if (error) {
            console.log(error.message)
            return <Error errorMessage={"Sorry, there's been an error."} />
          }
          if (props.location.triggerRefetch) refetch()
          return (
            <>
              <Logout handleLogout={props.handleLogout} />
              <UserInfo user={{ ...data.user }} />
              <VideoGrid videos={data.user.videos} />
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default Profile
