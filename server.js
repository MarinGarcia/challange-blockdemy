require('dotenv').config()

const express = require('express');
const { ApolloServer } =  require('apollo-server-express');
const { connectDB } = require('./src/db/connect');
const schema = require("./src/schema");

const PORT = process.env.PORT;

const app = express();

connectDB();

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log('Server on port: ', PORT)
  });
};

start();
