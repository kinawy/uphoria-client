import React, {useState} from "react"
import {Mutation} from "react-apollo"
import gql from "graphql-tag"
import jwt_decode from "jwt-decode"
import {AUTH_TOKEN} from "../../auth/constant"
import {makeStyles} from "@material-ui/core/styles"
import Error from "../Error"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch"
		},
		"& input": {
			color: "white",
		},
		"& input:focus": {
			borderColor: "#66058c !important"
		}
	}
}))

const Login = (props) => {
	const [error, setError] = useState(null)
	const classes = useStyles()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const LOGIN_MUTATION = gql`
      mutation LoginMutation($email: String!, $password: String!) {
          login(email: $email, password: $password) {
              token
          }
      }
	`

	const handleError = (error) => {
		let errorComp = <Error errorMessage={error.message} />
		setError(errorComp)
	}

	let handleSubmit = (e) => {
		setError(null)
		e.preventDefault()
	}

	let confirm = async (data) => {
		const {token} = data.login
		localStorage.setItem(AUTH_TOKEN, token)
		const decoded = jwt_decode(token)
		props.nowCurrentUser(decoded)
	}

	return (
		<div className="login-form">
			{error}
		<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

			<div>
				<input
					type="text"
					required
					id="filled-required"
					placeholder="Email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
				<input
					type="password"
					required
					id="filled-password-input"
					placeholder="Password"
					value={password}
					autoComplete="current-password"
					onChange={(e) => {
						setPassword(e.target.value)
					}}
					variant="filled"
				/>
				<Mutation
					mutation={LOGIN_MUTATION}
					variables={{email, password}}
					onError={error => handleError(error)}
					onCompleted={data => confirm(data)}
				>
					{mutation => {
						let checkFields = () => {
							if(email.includes("@")) {
								mutation()
							}
						}
						return (<button type="submit" className="btn btn-primary float-right" onClick={checkFields}>Submit</button>)
					
					}}
				</Mutation>
			</div>
		</form>
			</div>
	)
}

export default Login