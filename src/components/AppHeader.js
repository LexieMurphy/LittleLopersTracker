import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import Sidebar from "react-sidebar";


  import LoginButton from './LoginButton';

  const styles ={
    flex: {
      flex: 1,
    },
  };

  class AppHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }

    render() {
      const sideBarContent = (
        <div>
          <button className="theme-button" onClick={() => this.onSetSidebarOpen(false)}>
            Close sidebar
          </button>
        </div>
  
      )

      return (
      <AppBar position="static">
            <Sidebar 
        sidebar={sideBarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#e699d5" } }}
      />
      <Toolbar>
      <button className="open-sidebar-button" onClick={() => this.onSetSidebarOpen(true)}>
            
          </button>
        <Typography variant="title" color="inherit">
          Little Lopers Tracker
        </Typography>
        <div />
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
    }
  }




export default withStyles(styles)(AppHeader);
