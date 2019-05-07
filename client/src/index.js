import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import App from './App';

const oktaConfig = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID
};
const Element = () => {
  return (
    <div>
      <BrowserRouter>
        <Security {...oktaConfig}>
          <App />
        </Security>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Element />,
  document.getElementById('root'));

if (module.hot) module.hot.accept();