import { ResolverContext } from "..";
import { MutationResolvers } from "../../graphql";
import { Category } from "../../models/category";

export const createCategory: MutationResolvers<ResolverContext>["createCategory"] =
  async (_, { category }) => {
    await Category.create(category);
    return true;
  };

export const updateCategory: MutationResolvers<ResolverContext>["updateCategory"] =
  async (_, { category }) => {
    try {
      const existBlog = await Category.findById(category?._id);
      if (!existBlog || !category) throw Error(`Not found blog.`);
      await Category.updateOne(category);
      return true;
    } catch {
      return false;
    }
  };
