import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  expertise: { type: String }, // Example: "Trekking Specialist, Everest Region"
  rating: { type: Number, default: 0 },
  isAvailable: { type: Boolean, default: true },
});

export default mongoose.model('Guide', guideSchema);
