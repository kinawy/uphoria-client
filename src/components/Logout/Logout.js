import React from "react"
import { Link } from 'react-router-dom'


const Logout = (props) => {
  return (
    <Link className="btn btn-primary logoutButton" onClick={props.handleLogout}>
      Log-out
    </Link>
  )
}

export default Logout
