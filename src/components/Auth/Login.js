import React, {useState} from "react"
import TextField from "@material-ui/core/TextField"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}))

const Login = (props) => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          required
          id="filled-required"
          label="Username"
          defaultValue=""
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Email"
          defaultValue=""
          variant="filled"
        />
        <TextField
          required
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </div>
    </form>
  )
}

export default Login