require('dotenv').config({ path: '.env' });
const apiRoutes = require('./routes/apiRoutes');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

var db = require("./models");

// const epilogue = require('epilogue');
const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
});
console.log(OktaJwtVerifier.clientId)
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  console.log(req.headers);
  try {
    if (!req.headers.authorization) throw new Error('Authorization header is required');

    const accessToken = req.headers.authorization.trim().split(' ')[1];
    await oktaJwtVerifier.verifyAccessToken(accessToken);
    console.log('hello' + accessToken);
    next();
  } catch (error) {
    next(error.message);
  }
});

// const Post = database.define('posts', {
//   title: Sequelize.STRING,
//   body: Sequelize.TEXT,
// });

// epilogue.initialize({ app, sequelize: database });

// epilogue.resource({
//   model: Post,
//   endpoints: ['/posts', '/posts/:id'],
// });

apiRoutes(app);

const port = process.env.SERVER_PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});