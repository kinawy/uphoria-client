import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import SearchBar from "./SearchBar"
import SearchIcon from "@material-ui/icons/Search"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Backdrop from "@material-ui/core/Backdrop"
import Typography from "@material-ui/core/Typography"
import Zoom from "@material-ui/core/Zoom"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
// import EditIcon from '@material-ui/icons/Edit';
import UpIcon from "@material-ui/icons/KeyboardArrowUp"
import { green } from "@material-ui/core/colors"
import Box from "@material-ui/core/Box"


const TabPanel = (props) => {
    const { children, value, index, ...other } = props
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}>
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    )
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }
  
  const TopNav = () => {
    const [value, setValue] = useState(0)
      let searchBar = ""
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
  
    if(value === 2) {
        searchBar = <SearchBar />
    }
  
    return (
      <div className="header-tab">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example">
            <Tab label="Following" />
            <Tab label="Hashtags" />
            <Tab label={<SearchIcon />} />
          </Tabs>
            {searchBar}
        </AppBar>
      </div>
    )
  }
  export default TopNav