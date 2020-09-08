import React from "react"
import Login from "./Login"
import Register from "./Register"
import "../../styles/Auth.css"

const Auth = (props) => {
	return (
		<div className="auth-page">
			<Login nowCurrentUser={props.nowCurrentUser} user={props.user}/>
			<Register/>
		</div>
	)
}

export default Auth