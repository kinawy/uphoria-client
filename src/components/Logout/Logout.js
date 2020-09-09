import React from "react"

const Logout = (props) => {
  return (
    <button className="btn btn-primary" onClick={props.handleLogout}>
      Log-out
    </button>
  )
}

export default Logout
