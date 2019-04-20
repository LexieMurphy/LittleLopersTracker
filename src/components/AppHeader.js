import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

  import LoginButton from './LoginButton';

  const styles ={
    flex: {
      flex: 1,
    },
  };

  const AppHeader = ({classes}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Little Lopers Tracker
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      {/* We aren't using this yet. <Button color="inherit" component={Link} to="/posts">My Stash</Button> */}
      <div className={classes.flex} />
      <LoginButton />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
