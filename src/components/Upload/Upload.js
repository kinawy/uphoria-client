import React, {useState} from "react"
import "../../styles/Upload.css"

const Upload = (props) => {
  return (
    <div className="upload-component">
      <h2>Upload your content here</h2>
      <form encType="multipart/form-data" action="/create" method="post">
        <input type="file" name="myVideo"/>
        <input type="submit" className="btn btn-primary"/>
      </form>
    </div>
  )
}


export default Upload

