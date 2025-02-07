import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    district: { type: String, required: true },
    description: { type: String, required: true },
    activities: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model('Destination', destinationSchema);
