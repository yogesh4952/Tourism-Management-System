import cron from 'node-cron';
import User from './models/user.model.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './DB/db.js';

dotenv.config();

// Connect to the database
connectDB();

// Schedule a task to downgrade premium users every day at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running premium validation check at midnight...');

  try {
    const expiredUsers = await User.find({
      premiumValidate: { $lt: new Date() },
      isPremium: true,
    });

    for (const user of expiredUsers) {
      user.isPremium = false;
      await user.save();
      console.log(`User ${user.username} downgraded from premium.`);
    }
  } catch (error) {
    console.error('Error during premium validation:', error);
  }
});
