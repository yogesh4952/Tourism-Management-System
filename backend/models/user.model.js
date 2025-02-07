import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    fullname: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
    isAccountVerified: { type: Boolean, default: false },
    verifyOtp: { type: String },
    verifyOtpExpriesAt: { type: Date },
    resetOtp: { type: String },
    resetOtpExpiresAt: { type: Date, default: Date.now }, // Default to current date, will be set to 15 min expiry
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
