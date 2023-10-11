const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLFloat, GraphQLNonNull } = require('graphql');
const { connectDatabase } = require('./db');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    currency: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLString } },
      resolve: async (parent, args) => {
        const db = await connectDatabase();
        const [product] = await db.query('SELECT * FROM products WHERE id = ?', [args.id]);
        return product[0];
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: async () => {
        const db = await connectDatabase();
        const [products] = await db.query('SELECT * FROM products');
        return products;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        imageUrl: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLFloat) },
        currency: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const { name, imageUrl, amount, currency } = args;
        const db = await connectDatabase();
        const [result] = await db.query(
          'INSERT INTO products (name, imageUrl, amount, currency) VALUES (?, ?, ?, ?)',
          [name, imageUrl, amount, currency]
        );
        const [newProduct] = await db.query('SELECT * FROM products WHERE id = ?', [result.insertId]);
        return newProduct[0];
      },
    },
    deleteProduct: {
      type: GraphQLString,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: async (parent, args) => {
        const { id } = args;
        const db = await connectDatabase();
        const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
        if (result.affectedRows === 1) {
          return 'Product deleted successfully';
        } else {
          return 'Product not found';
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
