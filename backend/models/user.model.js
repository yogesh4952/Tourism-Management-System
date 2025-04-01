// models/user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk user ID
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional if Clerk handles passwords
  phoneNumber: { type: String },
  fullname: { type: String },
  isAccountVerified: { type: Boolean, default: false },
  verifyOtp: { type: String },
  verifyOtpExpriesAt: { type: Date },
  resetOtp: { type: String },
  resetOtpExpiresAt: { type: Date },
}, { timestamps: true });

export default mongoose.model('User', userSchema);