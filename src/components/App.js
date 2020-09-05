import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "../styles/App.css"

import Video from './Video'

const App = () => {
  return (
    <div className="App">
      <div className="user-videos">
        <Video />
        <Video />
        <Video />
      </div>
      <Switch>
        {/* Routes to go here later */}
      </Switch>
    </div>
  )
}

export default App
