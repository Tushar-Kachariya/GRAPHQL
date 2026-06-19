import Product from "../models/Product.js";

export const resolvers = {
  Query: {
    getProducts: async () => {
      return await Product.find();
    },

    getProduct: async (_, { id }) => {
      return await Product.findById(id);
    },
  },

  Mutation: {
    createProduct: async (_, { name, price, stock }) => {
      const product = new Product({ name, price, stock });
      return await product.save();
    },

    updateProduct: async (_, args) => {
      const { id, ...data } = args;
      return await Product.findByIdAndUpdate(id, data, { new: true });
    },

    deleteProduct: async (_, { id }) => {
      await Product.findByIdAndDelete(id);
      return "Product deleted successfully";
    },
  },
};
