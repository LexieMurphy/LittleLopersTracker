import React from "react";
import { withStyles } from '@material-ui/core';
import Sidebar from "react-sidebar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import './style.css';

// const IMAGE_BASE_URL = process.env.NODE_ENV === 'development' ? '/images/bows/' : '/images/bows/';
const IMAGE_BASE_URL = '/images/bows/';

const styles = (placement) => ({
  button: {
    flex: 1,
  }
});

class AppSidebar extends React.Component {
  renderSideBarContent = () => {
    const sideBarContent = (
      <div>
        <Button onClick={() => this.props.onSetSidebarOpen(false)}><Icon >remove_icon</Icon>Close Collection</Button>
        <ul>
          {
            this.props.itemsIDoNotHave.map((itm, idx) => {
              return (
                <div class="wrapper">
                  <div class="gallery">
                    <ul>
                      <li key={`${itm.bowName}_${itm.id}`} onClick={() => { this.props.onItemSelect(itm.id) }}>
                          <img src={`${IMAGE_BASE_URL}${itm.image_name}`} alt={itm.bowName} />
                          <h5 className="text-block">{itm.bowName}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
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
        styles={{ sidebar: { background: "#8f359b" } }}
      >
        {/* react-sidebar required a child, or it throw and error */}
        <span />
      </Sidebar>
    );
  }
}

export default withStyles(styles)(AppSidebar);
