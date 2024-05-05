import { ResolverContext } from "..";
import { Blog as GraphqlBlog, QueryResolvers } from "../../graphql";
import { Blog } from "../../models/blog";

export const getBlogList: QueryResolvers<ResolverContext>["getBlogList"] =
  async (_, { categoryId }, __) => {
    var blogList;
    if (categoryId === "all") {
      blogList = await Blog.find().populate("category");
    } else {
      blogList = await Blog.find({ category: categoryId }).populate("category");
    }
    return blogList as GraphqlBlog[];
  };
