const express = require('express');
const path = require('path');

// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of GraphQL schema
const { typeDefs, resolvers } = require('./Schema');
const db = require('./config/connection');

const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname,'../client/build/index.html'));
})

// Create a new instance of an Apollo server with the GraphQL schema
const startServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})

// Call the async function to start the server
startServer(typeDefs, resolvers);