import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Redirect} from "react-router-dom"
import {Mutation} from "react-apollo"
import gql from "graphql-tag"
import Error from "../Error"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch"
		},
		"& input": {
			color: "white"
		},
		"& input:focus": {
			borderColor: "#66058c !important"
		}
	}
}))

const Register = (props) => {
	const classes = useStyles()

	const [error, setError] = useState(null)

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [name, setName] = useState("")
	const [birthday, setBirthday] = useState("")
	const [redirect, setRedirect] = useState(false)

	let registerData = {username, email, password, name, birthday}

	const SIGNUP_MUTATION = gql`
      mutation SignupMutation($username: String!, $email: String!, $password: String!, $name: String!, $birthday: Date!) {
          signup(username: $username, email: $email, password: $password, name: $name, birthday: $birthday) {
              token
          }
      }
	`

	let handleSubmit = (e) => {
		setError(null)
		e.preventDefault()
	}

	const handleError = (error) => {
		let errorComp = <Error errorMessage={error.message} />
		setError(errorComp)
	}

	let confirm = async (data) => {
		const {token} = data.signup
		if (token) {
			setRedirect(true)
		}
	}

	if (redirect) return <Redirect to="/auth"/>

	return (
		<div className="register-form">
			{error}
			{/* <h5>Register your account below:</h5> */}
		<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
			<div>
				<input
					required
					id="standard-text-input"
					placeholder="Username"
					type="text"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				/>
				<input
					required
					id="standard-text-input"
					placeholder="Email"
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
				<input
					required
					id="standard-text-input"
					placeholder="Name"
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
				/>
				<input
					required
					id="standard-number"
					placeholder="Birthdate"
					type="date"
					InputplaceholderProps={{
						shrink: true
					}}
					value={birthday}
					onChange={(e) => {
						setBirthday(e.target.value)
					}}
				/>
				<input
					required
					id="standard-email-input"
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
				<input
					required
					id="standard-password-input"
					placeholder="Confirm Password"
					type="password"
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value)
					}}
				/>
				<Mutation
					mutation={SIGNUP_MUTATION}
					variables={registerData}
					onError={error => handleError(error)}
					onCompleted={data => confirm(data)}
				>
					{mutation => {
						const checkPassword = () => {
							if (password === confirmPassword) {
								mutation()
							}
						}
						return (
							<button type="submit" className="btn float-right" onClick={checkPassword}>Submit</button>)
					}}
				</Mutation>
			</div>
		</form>
			</div>
	)
}

export default Register