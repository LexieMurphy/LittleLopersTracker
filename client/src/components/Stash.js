import React from 'react';
import { withStyles } from '@material-ui/core';

const IMAGE_BASE_URL = '/images/bows/';

const styles = (placement) => ({
  button: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

// const App = (props) => {
class AppStash extends React.Component {
  

  render() {
    return (
<div>
        <ul>
          {
            this.props.itemsIDoHave.map((itm, idx) => {
              return (
                <li key={`${itm.bowName}_${itm.id}`} onClick={() => { this.props.onItemSelect(itm.id) }}>
                  <div>
                    <img style={{ width: '128px' }} src={`${IMAGE_BASE_URL}${itm.image_name}`} alt={itm.bowName} />
                    <div>
                      {itm.bowName}
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(AppStash);