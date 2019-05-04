import React from "react";
import { withStyles } from '@material-ui/core';
import Sidebar from "react-sidebar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

// const IMAGE_BASE_URL = process.env.NODE_ENV === 'development' ? '/images/bows/' : '/images/bows/';
const IMAGE_BASE_URL = '/images/bows/';

const styles = (placement) => ({
  button: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});
 
class AppSidebar extends React.Component {
  renderSideBarContent = () => {
    const sideBarContent = (
      <div>
        <i className="fas fa-angle-double-left" onClick={() => this.props.onSetSidebarOpen(false)} />
        <ul>
          {
            this.props.itemsIDoNotHave.map((itm, idx) => {
              return (
                <li key={`${itm.bowName}_${itm.id}`} onClick={() => { this.props.onItemSelect(itm.id) }}>
                  <div>
                    <img style={{ width: '128px'}} src={`${IMAGE_BASE_URL}${itm.image_name}`} alt={itm.bowName} />
                    <div>
                      { itm.bowName }
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )

    return sideBarContent;
  }
 
  render() {    
    return (
      <Sidebar 
        sidebar={this.renderSideBarContent()}
        onSetOpen={this.props.onSetSidebarOpen}
        open={this.props.sidebarOpen}
        styles={{ sidebar: { background: "#e699d5" } }}
      >
        {/* react-sidebar required a child, or it throw and error */}
        <span />
      </Sidebar>
    );
  }
}
 
export default withStyles(styles)(AppSidebar);
