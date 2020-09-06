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

const Register = (props) => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="standard-text-input"
          label="Name"
          type="text"
        />
        <TextField
          required
          id="standard-text-input"
          label="Username"
          type="text"
        />
        <TextField
          required
          id="standard-email-input"
          label="Email"
          type="email"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <TextField
          id="standard-number"
          label="Birthdate"
          type="date"
          InputLabelProps={{
            shrink: true
          }}
        />

      </div>

    </form>
  )
}

export default Register