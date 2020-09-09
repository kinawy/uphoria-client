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

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [profile, setProfile] = useState({})

  let editData = { username, email, name, birthday, profile }

  let userId = props.userId

//   if (!props.user) return <Redirect to="/auth" />

//   if (!props.location.userId) {
//     let token = jwt_decode(localStorage.getItem(AUTH_TOKEN))
//     userId = token._id
//   } else {
//     userId = props.location.userId
//   }

  const UPDATE_USER_MUTATION = gql`
    input Profile {
      bio: String!
      instagramUrl: String!
      personalUrl: String!
    }
    mutation UpdateUser(
      $id: ID!
      $username: String!
      $email: String!
      $name: String!
      $birthday: Date!
      $profile: Profile!
    ) {
      updateUser(
        id: $id
        username: $username
        email: $email
        password: $password
        name: $name
        birthday: $birthday
      )
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
  if (redirect) return <Redirect to="/auth" />

  console.log(props)
  console.log(profile)
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
            InputplaceholderProps={{
              shrink: true,
            }}
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value)
            }}
          />
          <input
            id="standard-text-input"
            placeholder="Instagram URL"
            type="text"
            value={profile}
            onChange={(e) => {
                setProfile(e.target.value)
            }}
          />
          <Mutation
            mutation={UPDATE_USER_MUTATION}
            variables={(editData, { id: userId })}
            onCompleted={(data) => confirm(data)}>
            {() => {
              return (
                <button type="submit" className="btn float-right">
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
