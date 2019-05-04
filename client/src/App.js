import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import { CssBaseline, withStyles } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './pages/Home';
// import Sidebar from './components/SideBar';
import AppHeader from './components/AppHeader';
import Jumbotron from './components/Jumbotron';
import ItemModalWrapped from './components/Modal';

import API from './utils/API'


const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
  
});

class App extends Component {

  state = {
    itemsIDoNotHave: [],
    itemsIDoHave: []
  }

  componentDidMount () {
    API.getItemsIDoNotHave()
      .then((response) => {
        if (response.status === 200) {
          this.setState({ itemsIDoNotHave: response.data });
        }
      })
  }

  onItemSelect = (itemId) => {
    console.log(itemId);
    
    const itemsIDoHave = { ...this.state.itemsIDoHave }
    // get the item from this.state.itemsIDoNotHave
    // push it into itemsIDoHave
    // call this.setState({itemsIDoHave})
  }

  render () {
    const { classes } = this.props;
    const { itemsIDoNotHave } = this.state;    

    return (
      <Fragment>
        <CssBaseline />
        <AppHeader itemsIDoNotHave={itemsIDoNotHave} onItemSelect={this.onItemSelect} />

        <main className={classes.main}>
          <Route exact path="/" render={(props) => {
              return <Home {...props} itemsIDoHave={this.state.itemsIDoHave} />
            }}
          />
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