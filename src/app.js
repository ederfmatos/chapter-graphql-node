const { ApolloServer } = require('apollo-server');
const { ProductResolver } = require('./product.resolver');
const { ProductSchema } = require('./product.schema');

const typeDefs = [ProductSchema];
const resolvers = [ProductResolver];

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log('Server started at:', url);
});
