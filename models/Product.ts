import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  sku: string;

  description: string;

  price: number;

  stock: number;

  images: string[];

  category: mongoose.Types.ObjectId;

  brand: mongoose.Types.ObjectId;

  vehicleMake: string;

  vehicleModel: string;

  yearFrom: number;

  yearTo: number;

  featured: boolean;

  active: boolean;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    images: [
      {
        type: String,
      },
    ],

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },

    vehicleMake: {
      type: String,
      required: true,
    },

    vehicleModel: {
      type: String,
      required: true,
    },

    yearFrom: {
      type: Number,
      required: true,
    },

    yearTo: {
      type: Number,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product: Model<IProduct> =
  mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);

export default Product;