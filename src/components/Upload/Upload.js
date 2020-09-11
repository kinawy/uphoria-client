import React, {useState} from "react"
import gql from "graphql-tag"
import { Redirect } from "react-router-dom"
import { Mutation } from "react-apollo"
import "../../styles/Upload.css"
import logo from "../../assets/logo.png" // import logo image here
import Loading from "../Loading/Loading"
import Error from "../Error"

const Upload = (props) => {
  const [error, setError] = useState(null)
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  const [uploaded, setUploaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const userId = props.userId

  const uploadMutation = gql`
      mutation($description: String!, $file: Upload!, $userId: ID!) {
          createVideo(description: $description, file: $file, userId: $userId)
      }
  `

  const uploadData = {description, file, userId}

  const changeFile = ({
                        target: {
                          validity,
                          files: [file]
                        }
                      }) => {
    if (validity.valid) setFile(file)
  }

  const handleError = (error) => {
    let errorComp = <Error errorMessage={error.message}/>
    setError(errorComp)
  }

  let handleSubmit = (e) => {
    e.preventDefault()
  }

  let confirm = (result) => {
    if (result) {
      setError(null)
      setUploaded(true)
      setLoading(false)
    }
  }


  if (loading) return <Loading/>
  if (uploaded) return <Redirect to={{
    pathname: "/profile",
    triggerRefetch: true
  }}/>


  return (
    <div className="upload-component">
      <div className="logoDiv">
        <img src={logo}/>
      </div>
      <h2>Upload your content here</h2>
      {error}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="description" value={description} onChange={(e) => {
          setDescription(e.target.value)
        }} placeholder="write your description"/>
        <input type="file" accept="video/mp4,video/x-m4v,video/*" className="file-btn" name="uphoriaVideo"
               onChange={changeFile}/>
        <Mutation
          mutation={uploadMutation}
          variables={uploadData}
          onCompleted={result => confirm(result)}
          onError={error => handleError(error)}
        >
          {mutation => {
            const checkFile = () => {
              if (file) {
                setLoading(true)
                mutation()
              }
            }
            return (
              <button type="submit" className="btn float-right" onClick={checkFile}>Submit</button>)
          }}
        </Mutation>
      </form>
    </div>
  )
}

export default Upload
