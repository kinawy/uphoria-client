import React from "react"
import "../styles/Error.css"

const Error = (props) => {
  return (
    <div className="errorDiv">
      <h1>Sorry,</h1>
      <h2>Something Went Wrong:</h2>
	    <p>{props.errorMessage}</p>
    </div>
  )
}

export default Error
