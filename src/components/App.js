import React, { useState, useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "../styles/App.css"
import BottomNav from "./BottomNav"
import jwt_decode from "jwt-decode"
import { AUTH_TOKEN } from "../auth/constant"
import Video from "./Video"
import Profile from "./Profile/Profile"
import ProfileEdit from "./Profile/ProfileEdit"
import Auth from "./Auth/Auth"
import Upload from "./Upload/Upload"
import Loading from "./Loading/Loading"
import Error from "./Error"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Spinner from "./Spinner/Spinner"

const App = (props) => {
  let [currentUser, setCurrentUser] = useState("")

  const queryVideos = gql`
      {
        videos {
          id
          description
          userId {
            id
            username
          }
          videoUrl
          likes
          shares
        }
      }
    `
  useEffect(() => {
    let token
    if (!localStorage.getItem(AUTH_TOKEN)) {
      //Do something later
    } else {
      token = jwt_decode(localStorage.getItem(AUTH_TOKEN))
      console.log("DECODING PROCESS:", token)
      setCurrentUser(token)
    }
  }, [])

  const nowCurrentUser = (userData) => {
    console.log("New Current User Set:", userData)
    setCurrentUser(userData)
  }

  const handleLogout = () => {
    if (localStorage.getItem(AUTH_TOKEN)) {
      localStorage.removeItem(AUTH_TOKEN)
      setCurrentUser(null)
    }
    return <Redirect to="/auth" />
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
			<Query query={queryVideos} fetchPolicy="no-cache">
				{({ loading, error, data , refetch}) => {
					if (loading) return <Spinner />;
					if (error) return <Error errorMessage={error.message} />;
          // if (props.location.triggerRefetch) refetch()

				let videos = data.videos.map((video) => {
					return (
						<Video key={video.id} video={video} />
					)
				})

				return videos
				}}
			</Query>
		)} />
        <Route
          exact
          path="/auth"
          render={(props) => (
            <Auth
              {...props}
              nowCurrentUser={nowCurrentUser}
              user={currentUser}
            />
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              user={currentUser}
              handleLogout={handleLogout}
            />
          )}
        />
        <Route
          path="/create"
          render={() => <Upload userId={currentUser._id} />}
        />
        <Route path="/edit" render={(props) => <ProfileEdit {...props} handleLogout={handleLogout}/>} />
        <Route path="*" component={Error} />
      </Switch>
      <BottomNav />
    </div>
  )
}

export default App
