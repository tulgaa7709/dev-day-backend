import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  summary: string;
  category: string;
  updatedAt: number;
  createdAt: number;
}

const blogSchema = new Schema({
  title: { type: String, require },
  summary: { type: String, require },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  updatedAt: {
    type: Number,
    require,
  },
  createdAt: {
    type: Number,
    require,
    default: new Date(),
  },
});

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);
