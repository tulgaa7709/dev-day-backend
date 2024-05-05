import { ResolverContext } from "..";
import { MutationResolvers } from "../../graphql";
import { Blog } from "../../models/blog";

export const createBlog: MutationResolvers<ResolverContext>["createBlog"] =
  async (_, { blog }) => {
    try {
      await Blog.create(blog);
      return true;
    } catch {
      return false;
    }
  };

export const updateBlog: MutationResolvers<ResolverContext>["updateBlog"] =
  async (_, { blog }) => {
    try {
      const existBlog = await Blog.findById(blog?._id);
      if (!existBlog || !blog) throw Error(`Not found blog.`);
      await Blog.updateOne(blog);
      return true;
    } catch {
      return false;
    }
  };
