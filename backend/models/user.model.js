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
    resetOtpExpiresAt: { type: Date, default: Date.now },
    addFree: {
      type: Boolean,
      default: true,
    },
    // Default to current date, will be set to 15 min expiry
    premiumValidate: {
      type: Date,
      default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  const user = this;

  // Set `addFree` dynamically based on premium validity
  user.addFree = user.isPremium && user.premiumValidate > new Date();
  next();
});

export default mongoose.model('User', userSchema);
