import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  district: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  activities: [{ type: String }], // Example: ["Paragliding", "Rafting"]
  hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Destination', destinationSchema);
