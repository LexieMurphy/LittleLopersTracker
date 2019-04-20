import React from "react";

import Sidebar from "react-sidebar";
import './Sidebar.css'



  
 
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
        <button class ="theme-button" onClick={() => this.onSetSidebarOpen(false)}>
          Close sidebar
        </button>
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
 
export default App;
