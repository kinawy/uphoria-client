import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Redirect} from "react-router-dom"
import {Mutation} from "react-apollo"
import gql from "graphql-tag"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch"
		}
	}
}))

const Register = (props) => {
	const classes = useStyles()

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
		e.preventDefault()
	}

	let confirm = async (data) => {
		const {token} = data.signup
		if (token) {
			setRedirect(true)
		}
	}

	if (redirect) return <Redirect to="/auth"/>

	return (
		<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
			<div>
				<input
					required
					id="standard-text-input"
					label="Username"
					type="text"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				/>
				<input
					required
					id="standard-text-input"
					label="Email"
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
				<input
					required
					id="standard-text-input"
					label="name"
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
				/>
				<input
					required
					id="standard-number"
					label="Birthdate"
					type="date"
					InputLabelProps={{
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
					label="Password"
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
				<input
					required
					id="standard-password-input"
					label="Confirm Password"
					type="password"
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value)
					}}
				/>
				<Mutation
					mutation={SIGNUP_MUTATION}
					variables={registerData}
					onCompleted={data => confirm(data)}
				>
					{mutation => {
						const checkPassword = () => {
							if (password === confirmPassword) {
								mutation()
							}
						}
						return (
							<button type="submit" className="btn btn-primary float-right" onClick={checkPassword}>Submit</button>)
					}}
				</Mutation>
			</div>
		</form>
	)
}

export default Register