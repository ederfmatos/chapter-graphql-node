const { v4: uuid } = require('uuid')

const products = [];

const ProductResolver = {
  Query: {
    products: (root, filter, context, info) => {
      console.log('Iniciando busca de produtos');
      return products;
    },
  },
  Mutation: {
    product: (root, { input }, context, info) => {
      console.log('Iniciando criação de produto com', input)

      const product = {
        id: uuid(),
        ...input,
      };

      products.push(product)

      console.log('Finalizado criação de produto')

      return product
    }
  }
};

module.exports = { ProductResolver }