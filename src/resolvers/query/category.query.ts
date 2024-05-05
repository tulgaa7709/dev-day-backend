import { ResolverContext } from "..";
import { QueryResolvers } from "../../graphql";
import { Category } from "../../models/category";

export const getCategoryList: QueryResolvers<ResolverContext>["getCategoryList"] =
  async (_, __) => {
    const categoryList = await Category.find();
    return categoryList;
  };
