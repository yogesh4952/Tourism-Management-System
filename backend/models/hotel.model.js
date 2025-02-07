import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    district: { type: String, required: true }, // Add district directly to avoid destination reference
    description: { type: String },
    pricePerNight: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    isPremium: { type: Boolean, default: false },
    premiumValidate: {
      type: Date,
      default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  },
  { timestamps: true }
);

export default mongoose.model('Hotel', hotelSchema);
