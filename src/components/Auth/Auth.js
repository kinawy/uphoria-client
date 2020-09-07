import React from "react"
import Login from "./Login"
import Register from "./Register"

const Auth = (props) => {
	return (
		<>
			<Login nowCurrentUser={props.nowCurrentUser} user={props.user}/>
			<Register/>
		</>
	)
}

export default Auth