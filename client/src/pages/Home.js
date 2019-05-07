import React from 'react';
import {
  Typography,
} from '@material-ui/core';
// import Stash from '../components/Stash';

export default (props) => {
  console.log(props.itemsIDoHave)

  return (
    <div>
      <Typography variant="display1" position="">Welcome Little Lopers!</Typography>
      {/* <Stash> </Stash> */}
    </div>
  )
};