import React,{useState} from "react"
import Login from "./Login"
import Register from "./Register"
import {Redirect} from 'react-router-dom'
import logo from '../../assets/logo-1515355105327.png' // import logo image here
import "../../styles/Auth.css"
import Logout from "../Logout/Logout"

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
			<div className="logoDiv">
				<img src={logo} ></img>
			</div>
			<div class="btn-group">
				<button type="button" class="btn btn-primary" onClick={handleLoginButton}>Login</button>
				<button type="button" class="btn btn-primary" onClick={handleRegisterButton}>Register</button>
			</div>
			<div className="authFormDiv">
				{toggleLogin 
				? 
				<Login nowCurrentUser={props.nowCurrentUser} user={props.user}/>
				:
				<Register/>}
			</div>
		</div>
	)
}

export default Auth