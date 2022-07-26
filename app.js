require('dotenv').config()

const express = require('express');
const { ApolloServer } =  require('apollo-server-express');
const { typeDefs } =  require('./typeDefs');
const { resolvers } = require('./resolvers');
const { connectDB } = require('./db/connect');
const PORT = process.env.PORT;

const app = express();

connectDB();

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log('Server on port: ', PORT)
  });
};

start();
