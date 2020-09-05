import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "../styles/App.css"
import BottomNav from "./BottomNav"
import SearchBar from './SearchBar'
import TopNav from './TopNav'

import Video from './Video'

const App = () => {
  return (
    <div className="App">
      <TopNav />
      {/* <SearchBar /> */}
      <header className="App-header">
        <h1>We are ready to go!</h1>
      </header>
      <Switch>
        {/* Routes to go here later */}
      </Switch>
      <BottomNav />
    </div>
  )
}

export default App
