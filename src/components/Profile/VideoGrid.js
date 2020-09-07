import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  video: {
    padding: theme.spacing(1),
    textAlign: "center",
    width: "100%",
    position: "relative",
  }
}))

const VideoGrid = (props) => {
  const classes = useStyles()

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          {/*<Paper className={classes.meme}>item*/}
          <img src="https://via.placeholder.com/200x350" className={classes.video}/>
          {/*</Paper>*/}
        </Grid>
        <Grid item xs={4}>
          {/*<Paper className={classes.meme}>*/}
          <img src="https://via.placeholder.com/200x350" className={classes.video}/>
          {/*</Paper>*/}
        </Grid>
        <Grid item xs={4}>
          {/*<Paper className={classes.meme}>*/}
          <img src="https://via.placeholder.com/200x350" className={classes.video}/>
          {/*</Paper>*/}
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow/>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow/>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow/>
        </Grid>
      </Grid>
    </div>
  )
}

export default VideoGrid