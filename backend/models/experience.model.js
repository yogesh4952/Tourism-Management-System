import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    userId: { type: String }, // Here, using simple String (username/email)
    tags: [{ type: String }],
    rating: { type: Number, default: 0, min: 0, max: 5 },
    publishedAt: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    likes: [{ type: String }], // String values (username/email) instead of ObjectId
    likesCount: { type: Number, default: 0 }, // Count of likes for this experience
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
