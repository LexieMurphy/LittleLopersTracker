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
      <div style={{ width: '100%' }}>
        <AppBar position="static" style={{ paddingBottom: 0, marginBottom: 0}}>
          <AppSidebar
            sidebarOpen={this.state.sidebarOpen}
            onSetSidebarOpen={this.onSetSidebarOpen}
            itemsIDoNotHave={itemsIDoNotHave}
            onItemSelect={this.props.onItemSelect}
          />
          <Box component="span" p={1}>
            <Toolbar>
              <Box p={1} flexGrow={1}>
                
                <Button color="inherit" onClick={() => this.onSetSidebarOpen(true)}><Icon>add_icon</Icon>View the Full Collection!</Button>
              </Box>
              <Box flexGrow={1.40} p={0}>
                <Typography className="header" variant="title" color="inherit">
                  Little Lopers Tracker
                </Typography>
              </Box>
              <Box p={2}>
                <LoginButton />
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </div>
    );
  }
}




export default withStyles(styles)(AppHeader);
