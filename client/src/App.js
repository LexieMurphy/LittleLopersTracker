import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
// import Sidebar from './components/SideBar';
import Jumbotron from './components/Jumbotron';
import ItemModalWrapped from './components/Modal';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
  
});

class App extends Component {
  render () {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <AppHeader />

        <main className={classes.main}>
          <Route exact path="/" component={Home} />
          {/* <SecureRoute exat path="/posts" component={PostsManager} /> */}
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </main>

        <Jumbotron></Jumbotron>
        <ItemModalWrapped></ItemModalWrapped>
      </Fragment>
    )
  }
}

library.add(faStroopwafel);
export default withStyles(styles)(App);