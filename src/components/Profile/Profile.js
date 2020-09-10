import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import { Redirect } from "react-router-dom"
import Logout from "../Logout/Logout"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import "../../styles/Profile.css"
import Loading from "../Loading/Loading"
import jwt_decode from "jwt-decode"
import {AUTH_TOKEN} from "../../auth/constant"
import Error from "../Error"


const Profile = (props) => {
  let userId = ""
  let queryUserInfo

  if (!props.user) return <Redirect to="/auth" />

  if (!props.location.userId) {
    let token = jwt_decode(localStorage.getItem(AUTH_TOKEN))
    userId = token._id
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
			<Logout handleLogout={props.handleLogout}/>
			<Query query={queryUserInfo} variables={{ id: userId }}>
				{({ loading, error, data  }) => {
					if (loading) return <Loading />;
					if (error) return <Error errorMessage={error.message} />;

          return (
            <>
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
