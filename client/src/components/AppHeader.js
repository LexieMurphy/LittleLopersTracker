import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Button,
} from '@material-ui/core';
import AppSidebar from "./AppSidebar";
import LoginButton from './LoginButton';
import Icon from '@material-ui/core/Icon';

const styles = {

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
      <div style={{ width: '100%' }} className="header">
        <AppBar position="static" style={{ paddingBottom: 0, marginBottom: 0 }}>
          <AppSidebar
            sidebarOpen={this.state.sidebarOpen}
            onSetSidebarOpen={this.onSetSidebarOpen}
            itemsIDoNotHave={itemsIDoNotHave}
            onItemSelect={this.props.onItemSelect}
          />
          <div >
            <Toolbar className="headerBody">
              <Button color="inherit" onClick={() => this.onSetSidebarOpen(true)}><Icon>add_icon</Icon>View the Item I Still Need!</Button>
              <Typography className="header" variant="title" color="inherit">
                Little Lopers Tracker
              </Typography>
              <LoginButton />
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(AppHeader);
