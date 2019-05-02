import React from "react";
import {
 
  withStyles,
} from '@material-ui/core';

import Sidebar from "react-sidebar";
import './Sidebar.css';
import API from "../utils/API";



// export function Container({ fluid, children }) {
//   return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
// }

// // This Row component lets us use a bootstrap row without having to think about class names
// export function Row({ fluid, children }) {
//   return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
// }

// // This Col component lets us size bootstrap columns with less syntax
// // e.g. <Col size="md-12"> instead of <div className="col-md-12">
// export function Col({ size, children }) {
//   return (
//     <div
//       className={size
//         .split(" ")
//         .map(size => "col-" + size)
//         .join(" ")}
//     >
//       {children}
//     </div>
//   );
// }


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
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  getFilteredItems = () => {
    API.getFilteredItems()
    .then((filteredItems) => {
      console.log(filteredItems);
    })
  }

  componentDidMount() {
    this.getFilteredItems({ })
  }
 
  render() {
    // const sideBarContent = (
    //   <div>
    //      <i className="fas fa-angle-double-right"  onClick={() => this.onSetSidebarOpen(false)}/>
    //     {/* <button class ="theme-button"  onClick={() => this.onSetSidebarOpen(false)}> */}
    //       {/* Close sidebar
    //     </button> */}
        
      // </div>

    // )

    

    return (
      <Sidebar 
        sidebar={<b><API></API></b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#e699d5" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>Open</button>
      </Sidebar>
    );
  }
}
 
export default withStyles(styles)(App);
