import http from "http";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { createCategory, updateCategory } from "./resolvers/mutation";
import { getCategoryList } from "./resolvers/query";
import { connectToDB } from "./models";
import { loadFiles } from "@graphql-tools/load-files";
import { resolvers } from "./resolvers";

async function main() {
  // const schema = `
  //   type Category {
  //     _id: ID!
  //     name: String!
  //     updatedAt: Float
  //     createdAt: Float
  //   }
  //   input CreateCategoryInput {
  //     name: String!
  //   }
  //   input UpdateCategoryInput {
  //     _id: String!
  //     name: String!
  //   }

  //   type Query {
  //     getCategoryList: [Category!]
  //     getBlogList: [Category]
  //   }
  //   type Mutation {
  //     createCategory(category: CreateCategoryInput): Boolean!
  //     updateCategory(category: UpdateCategoryInput): Boolean!
  //   }
  // `;
  // const resolvers = {
  //   Query: {
  //     getBlogList: () => {
  //       return [];
  //     },
  //     getCategoryList: getCategoryList,
  //   },
  //   Mutation: {
  //     createCategory: createCategory,
  //     updateCategory: updateCategory,
  //   },
  // };

  await connectToDB();

  // APOLLO SERVER
  // const server = new ApolloServer({
  //   typeDefs: schema,
  //   resolvers: resolvers,
  // });
  // await server.start();

  const server = new ApolloServer({
    typeDefs: await loadFiles("src/schema/*.graphql"),
    resolvers: resolvers,
  });
  await server.start();

  // EXPRESS SERVER
  const app = express();
  const httpServer = http.createServer(app);

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    cookieParser(),
    bodyParser.json({ limit: "50mb" }),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({
        req,
        res,
      }),
    })
  );

  app.listen(4000, () => console.log(`🚀 Server running on port ${4000}`));
}

main();
