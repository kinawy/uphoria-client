import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
	  marginBottom: "5vh",
	  border: "1px solid black",
  },
	row: {
  	//Empty CSS
	},
	item: {
  	height: "100%",
		paddingBottom: "0px",
	},
  video: {
	  paddingBottom: "0px",
    border: "1px solid black",
    textAlign: "center",
	  height: "100%",
    width: "100%",
    position: "relative",
  }
}))

const VideoGrid = (props) => {
  const classes = useStyles()
  

  const FormRow = () => {
    let getVideos = props.videos.map(video => {
      
    })

    return (
      <React.Fragment>
        <Grid className={classes.item} item xs={4} p={0} m={0}>
          <img src="https://via.placeholder.com/200x350" className={classes.video}/>
        </Grid>
        <Grid className={classes.item} item xs={4} p={0} m={0}>
          <img src="https://via.placeholder.com/200x350" className={classes.video}/>
        </Grid>
        <Grid className={classes.item} item xs={4} p={0} m={0}>
          <img src="https://via.placeholder.com/200x350" className={classes.video}/>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.row} container item s={12} p={0} m={0}>
          <FormRow/>
        </Grid>
        <Grid className={classes.row} container item s={12} p={0} m={0}>
          <FormRow/>
        </Grid>
        <Grid className={classes.row} container item s={12} p={0} m={0}>
          <FormRow/>
        </Grid>
      </Grid>
    </div>
  )
}

export default VideoGrid
