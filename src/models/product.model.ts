import mongoose from "mongoose";
import { Category } from "./category.model";

export interface Product {
  _id: string;
  name: string;
  description: string;
  qty: number;
  images: string[];
  category: Category;
}

const schema = new mongoose.Schema<Product>(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    description: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    images: {
      type: [mongoose.Schema.Types.String],
      default: [],
    },
    qty: {
      type: mongoose.Schema.Types.Number,
      default: 1,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("product", schema);

export default ProductModel;
