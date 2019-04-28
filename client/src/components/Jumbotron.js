import React from 'react';
import { Jumbotron } from 'reactstrap'; //removed Button
import './Jumbotron.css'

const App= (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-2" >MySTASH</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
        {/* Have it header and cards here*/}
          {/* <Button position="left" color="primary">Learn More</Button> */}
        </p>
      </Jumbotron>
    </div>
  );
};

export default App;