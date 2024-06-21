import { model, Schema } from 'mongoose';

export const FoodSchema = new Schema(
  {

    name: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: Number, required: true },
    totalquantity: { type: Number, required: true },
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model('food', FoodSchema);
