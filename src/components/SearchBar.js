import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const SearchBar = (props) => {

      const classes = useStyles()
   return (
       <div>
           <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
       </div>
   )
}

export default SearchBar

          