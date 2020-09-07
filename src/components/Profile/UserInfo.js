import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
}));

const UserInfo = (props) => {
  const classes = useStyles();

  return (
    <div className="user-info">
      <h4>username</h4>
      <img src="https://rb.gy/yecyjb"  className="circle responsive-image"/>
      {/* could be edit or follow/unfollow button depending on user*/}
      <Icon color="secondary">add_circle</Icon>
      <p>a sample bio could be "i got kicked off of tiktok and i hate cheetos"</p>
      <p className="ig-url">instagram-url-here</p>
      <p className="personal-url">personal-url-here</p>
    </div>
  );
}

export default UserInfo