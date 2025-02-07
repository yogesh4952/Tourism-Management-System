import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    profilePicture: { type: String }, // URL for the profile picture
    expertise: { type: [String], required: true }, // Example: ["Trekking", "Cultural Tours"]
    languages: { type: [String], default: [] }, // Example: ["English", "Nepali", "French"]
    experienceYears: { type: Number, default: 0 }, // Years of experience as a guide
    preferredRegions: { type: [String], default: [] }, // Example: ["Kathmandu", "Pokhara"]
    pricing: {
      perHour: { type: Number, default: 0 },
      perTrip: { type: Number, default: 0 },
    },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    isAvailable: { type: Boolean, default: true },
    availabilitySchedule: [
      {
        date: { type: Date },
        availableSlots: { type: [String] }, // Example: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"]
      },
    ],
    socialLinks: {
      linkedIn: { type: String },
      website: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Guide', guideSchema);
