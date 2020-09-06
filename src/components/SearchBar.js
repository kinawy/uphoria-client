import React from "react"
import TextField from "@material-ui/core/TextField"
import "../styles/SearchBar.css"

const SearchBar = (props) => {

  return (
    <div className="searchBar">
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Search Videos" variant="outlined" />
      </form>
    </div>
  )
}

export default SearchBar

// import SearchIcon from "@material-ui/icons/Search"
// let searchBar = ""
// if(value === 2) {
//         searchBar = <SearchBar />
//     }
// <Tab label={<SearchIcon />} />
// {searchBar}
