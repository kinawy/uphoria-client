import React,{useState} from "react"
import Login from "./Login"
import Register from "./Register"
import {Redirect} from 'react-router-dom'
import "../../styles/Auth.css"

const Auth = (props) => {
	let [toggleLogin, setToggleLogin] = useState(true);
	
	const handleLoginButton = () => { 
		setToggleLogin(true)
	}

	const handleRegisterButton = () => { 
		setToggleLogin(false)
	}

	if (props.user) return <Redirect to="/" user={props.user}/> 

	return (
		<div className="auth-page">
			<div class="btn-group">
				<button type="button" class="btn btn-primary" onClick={handleLoginButton}>Login</button>
				<button type="button" class="btn btn-primary" onClick={handleRegisterButton}>Register</button>
			</div>
			{toggleLogin 
			? 
			<Login nowCurrentUser={props.nowCurrentUser} user={props.user}/>
			:
			<Register/>}
		</div>
	)
}

export default Auth