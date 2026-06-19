import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import { connectDB } from "./config/db.js";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
// app.use(express.json());

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log(` Server running at http://localhost:5000${server.graphqlPath}`);
  });
};

startServer();