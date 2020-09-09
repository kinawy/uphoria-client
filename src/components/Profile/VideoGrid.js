import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "5vh",
    border: "1px solid black",
  },
  row: {
    // flexDirection: "column",
  },
  item: {
    paddingBottom: "0px",
    border: "1px solid black",
  },
  video: {
    paddingBottom: "0px",
    height: "100%",
    textAlign: "center",
    width: "100%",
    position: "relative",
  },
}))

const VideoGrid = (props) => {
  const classes = useStyles()
  let videos = []
  let newVideos = []

  const FormRow = () => {
    while (videos < props.videos.length) {
      props.videos.forEach((video) => {
        videos.push(video)
        console.log(videos)
      })
    }
    let i
    for (i = 0; i < videos.length; i++) {
      newVideos.push(
        <Grid key={videos[i].id} className={classes.item} item xs={4} p={0} m={0}>
          <video
            src={`https://res.cloudinary.com/agregis/video/upload/e_boomerang/eo_1/c_scale,g_south_west,l_logo_transparent_wvrps0,w_144/${videos[i].videoUrl}.mp4`}
            autoPlay={true}
            loop={true}
            muted
            className={classes.video}
          />
        </Grid>
      )
      console.log(newVideos)
    }
    return newVideos
  }

  return (
    <div className={classes.root}>
      <Grid container item s={12} p={0} m={0}>
        <Grid container>
          <FormRow className={classes.row} />
        </Grid>
      </Grid>
    </div>
  )
}

export default VideoGrid
