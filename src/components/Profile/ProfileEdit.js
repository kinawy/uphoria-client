import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Redirect } from "react-router-dom"
import { Mutation } from "react-apollo"
import jwt_decode from "jwt-decode"
import { AUTH_TOKEN } from "../../auth/constant"
import gql from "graphql-tag"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& input": {
      color: "white",
    },
    "& input:focus": {
      borderColor: "#66058c !important",
    },
  },
}))

const ProfileEdit = (props) => {
  const classes = useStyles()

  const [username, setUsername] = useState(props.location.user.username)
  const [email, setEmail] = useState(props.location.user.email)
  const [name, setName] = useState(props.location.user.name)
  const [birthday, setBirthday] = useState(props.location.user.birthday)
  const [redirect, setRedirect] = useState(false)
  const [bio, setBio] = useState(props.location.user.profile.bio)
  const [instagramUrl, setInstagramUrl] = useState(
    props.location.user.profile.instagramUrl
  )
  const [personalUrl, setPersonalUrl] = useState(
    props.location.user.profile.personalUrl
  )

  let userId = props.location.user.id
  let profile = { bio, instagramUrl, personalUrl }

  if (!props.location.user) return <Redirect to="/" />

  const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser(
      $id: ID!
      $username: String!
      $email: String!
      $name: String!
      $birthday: Date!
      $profile: userProfile!
    ) {
      updateUser(
        id: $id
        username: $username
        email: $email
        name: $name
        birthday: $birthday
        profile: $profile
      ) {
        id
      }
    }
  `
  let handleSubmit = (e) => {
    e.preventDefault()
  }

  let confirm = async (result) => {
    if (result) {
      setRedirect(true)
    }
  }
  if (redirect) return <Redirect to="/" />

  return (
    <div className="edit-form">
      <h5>Edit your account below:</h5>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        <div>
          <input
            id="standard-text-input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <input
            id="standard-text-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            id="standard-text-input"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <input
            id="standard-number"
            placeholder="Birthdate"
            type="date"
            value={new Date(birthday).toISOString().substr(0, 10)}
            onChange={(e) => {
              setBirthday(e.target.value)
            }}
          />
          <input
            id="standard-text-input"
            placeholder="Your Bio"
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
          />
          <input
            id="standard-text-input"
            placeholder="Instagram URL"
            type="text"
            value={instagramUrl}
            onChange={(e) => {
              setInstagramUrl(e.target.value)
            }}
          />
          <input
            id="standard-text-input"
            placeholder="Personal URL"
            type="text"
            value={personalUrl}
            onChange={(e) => {
              setPersonalUrl(e.target.value)
            }}
          />
          <Mutation
            mutation={UPDATE_USER_MUTATION}
            variables={{  username: username, email: email, name: name, birthday: birthday ,profile, id: userId }}
            onCompleted={(data) => confirm(data)}>
            {(mutation) => {
              return (
                <button
                  type="submit"
                  className="btn float-right"
                  onClick={mutation}>
                  Submit
                </button>
              )
            }}
          </Mutation>
        </div>
      </form>
    </div>
  )
}

export default ProfileEdit
