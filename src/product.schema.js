const { gql } = require('apollo-server');

 const ProductSchema = gql`
   input ProductInput {
    name: String!
    category: String!
    amount: Float! 
  }

  type Product {
    id: ID!
    name: String!
    category: String!
    amount: Float! 
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    product (input: ProductInput): Product!
  }
`;

module.exports = { ProductSchema }