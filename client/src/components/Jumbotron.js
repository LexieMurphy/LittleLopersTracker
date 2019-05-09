import React from 'react';
import { Jumbotron } from 'reactstrap'; //removed Button
import './style.css'

const App = (props) => {
  return (
    <Jumbotron>
      <div>
        <h1 className="header-j">My Stash</h1>
        <br /><br /><br /><br /><br />
        <hr className="style-seven" />
      </div>
    </Jumbotron>
  );
};

export default App;