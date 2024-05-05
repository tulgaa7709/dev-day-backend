import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  updatedAt: number | null;
  createdAt: number;
}

const categorySchema = new Schema({
  name: { type: String, require },
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

export const Category = mongoose.model<ICategory>("Category", categorySchema);
