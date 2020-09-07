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
import TopNav from '../components/TopNav/TopNav'

import Video from "./Video"
import SideBar from "./SideBar"
import Profile from "./Profile/Profile"

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Video} />
        {/*<Route path="/auth" component={Auth} />*/}
        <Route path="/profile" component={Profile} />
        {/*<Route path="/create" component={Create} />*/}
      </Switch>
      <BottomNav/>
    </div>
  )
}

export default App
