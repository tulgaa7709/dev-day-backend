import { Request, Response } from "express";
import { Resolvers } from "../graphql";

import * as Query from "./query";
import * as Mutation from "./mutation";

export type ResolverContext = {
  req: Request;
  res: Response;
};

export const resolvers: Resolvers<ResolverContext> = {
  Query,
  Mutation,
};
