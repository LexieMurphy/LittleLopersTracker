import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import AppSidebar from "./AppSidebar";
import LoginButton from './LoginButton';

const styles ={
  flex: {
    flex: 1
  },
};

class AppHeader extends React.Component {  
  state = {
    sidebarOpen: false
  };

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const { itemsIDoNotHave } = this.props;

    return (
      <AppBar position="static">
        <AppSidebar 
          sidebarOpen={this.state.sidebarOpen} 
          onSetSidebarOpen={this.onSetSidebarOpen} 
          itemsIDoNotHave={itemsIDoNotHave}
          onItemSelect={this.props.onItemSelect}
        />

        <Toolbar>
          <button className="fas fa-angle-double-right" onClick={() => this.onSetSidebarOpen(true)} />
          <Typography className="header" variant="title" color="inherit">
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
