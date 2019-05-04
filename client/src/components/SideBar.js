import React from "react";
import {
 
  withStyles,
} from '@material-ui/core';

import Sidebar from "react-sidebar";
import './Sidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = placement => ({
  button: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

  }
})
  
 
class App extends React.Component {
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
         <i className="fas fa-angle-double-right"  onClick={() => this.onSetSidebarOpen(false)}/>
         <div id="results">
              <table id="itemsIDoNotHave">
                <tr><th>bowName</th><th>image</th></tr>
              </table>
            </div>  
      </div>

    )

    return (
      <Sidebar 
        sidebar={sideBarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#e699d5" } }}
      />
    );
  }
}
 
export default withStyles(styles)(App);
