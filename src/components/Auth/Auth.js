import React,{useState} from "react"
import Login from "./Login"
import Register from "./Register"
import {Redirect} from 'react-router-dom'
import logo from '../../assets/logo.png' // import logo image here
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
			<div className="logoDiv">
				<img src={logo} />
			</div>
			<div className="appInfo">
				<p>Uphoria is designed to be a non intrusive, non tracking short form content site.</p>
			</div>
			<div className="authFormDiv">
				<div className="btn-group">
					<button type="button" className="btn btn-primary toggleBtn" onClick={handleLoginButton}>Login</button>
					<button type="button" className="btn btn-primary toggleBtn" onClick={handleRegisterButton}>Register</button>
				</div>
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