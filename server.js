const { GraphQLServer } = require('graphql-yoga');

//Types Definitions
const fs = require('fs');
const typeDefs = fs.readFileSync('./graphql/schema.graphqls', "utf8");

//Resolvers
const { resolvers } = require('./graphql/resolvers');

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));