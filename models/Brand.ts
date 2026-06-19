import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBrand extends Document {
  name: string;
  slug: string;
  logo?: string;
}

const BrandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    logo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Brand: Model<IBrand> =
  mongoose.models.Brand ||
  mongoose.model<IBrand>("Brand", BrandSchema);

export default Brand;