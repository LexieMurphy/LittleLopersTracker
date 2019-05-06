import React from 'react';
import { Typography,} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import  Stash  from '../components/Stash'
import { withState } from 'recompose';

const IMAGE_BASE_URL = '/images/bows/';

const styles = (placement) => ({
  button: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default withStyles((props) => {
  console.log(props.itemsIDoHave)

  return (
    <div>
    <Typography variant="display1" position="">Welcome Little Lopers!</Typography>

    <Stash> </Stash>
   </div>
//
  )})

 