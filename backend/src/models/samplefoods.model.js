import { model, Schema } from 'mongoose';

export const SampleFoodSchema = new Schema(
  {

    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
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

export const SampleFoodModel = model('samplefood', SampleFoodSchema);
