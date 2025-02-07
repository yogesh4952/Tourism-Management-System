import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user.model.js';
import validator from 'validator'; // Import validator
import { sendEmail, generateOtp, generateToken } from '../helper/utils.js';

dotenv.config();

// User registration
export const registerUser = async (req, res) => {
  const { username, email, password, phoneNumber, fullname } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password || !phoneNumber || !fullname) {
    return res.status(400).json({
      message: 'Bad request. Missing required fields.',
    });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).json({
      message: 'Username or email already exists.',
    });
  }

  // Hash the password for security
  const hashedPw = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPw,
    phoneNumber,
    fullname: fullname.trim(),
  });

  try {
    await newUser.save();
    return res.status(201).json({
      message: 'User registered successfully.',
      success: true,
      user: await User.findById(newUser._id).select('-password'),
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: 'Server error.',
      success: false,
    });
  }
};

// User login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(401)
        .json({ message: 'User not found.', success: false });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    const token = await generateToken(existingUser);

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    return res.status(200).json({
      message: 'Login successful.',
      data: await User.findById(existingUser._id).select('-password'),
      token,
      success: true,
    });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// Send OTP for account verification
export const sendVerifyOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: 'User doesn’t exist in the database.',
      });
    }

    if (user.isAccountVerified) {
      return res.json({
        success: false,
        message: 'Account is already verified.',
      });
    }

    const otp = generateOtp();
    user.verifyOtp = otp;
    user.verifyOtpExpriesAt = Date.now() + 24 * 60 * 60 * 1000;

    await user.save();
    await sendEmail(
      user.email,
      'Welcome to Coding Heroes',
      `<h1>Your OTP is ${otp}</h1><p>Welcome to PawaLaya!</p>`
    );

    return res.json({
      success: true,
      message: 'OTP sent successfully.',
      otp,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: 'Server error.',
      success: false,
      error: error.message,
    });
  }
};

// Verify OTP
export const verifyOtp = async (req, res) => {
  const { otp } = req.body;
  const token = req.cookies.jwt;
  console.log('Token:', otp);

  try {
    const decodeToken = jwt.verify(token, process.env.SECRET_STRING);
    if (!mongoose.Types.ObjectId.isValid(decodeToken.id) || !otp) {
      return res.json({
        message: 'Invalid input.',
      });
    }

    const user = await User.findById(decodeToken.id);
    if (!user) {
      return res.json({ success: false, message: 'User not found.' });
    }

    if (user.isAccountVerified) {
      return res.json({
        success: false,
        message: 'Account is already verified.',
      });
    }

    if (otp !== user.verifyOtp) {
      return res.json({ message: 'OTP doesn’t match.', success: false });
    }

    if (user.verifyOtpExpriesAt < Date.now()) {
      return res.json({ message: 'OTP is expired.' });
    }

    user.verifyOtpExpriesAt = null;
    user.verifyOtp = '';
    user.isAccountVerified = true;

    await user.save();

    return res.json({
      message: 'Email verified successfully.',
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: 'Server error.',
      success: false,
      error: error.message,
    });
  }
};

// Send OTP for password reset
export const sendResetOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: 'User not found in the database.',
      });
    }

    const otp = generateOtp();
    user.resetOtp = otp;

    // Set OTP expiration time to 15 minutes from now
    user.resetOtpExpiresAt = Date.now() + 15 * 60 * 1000; // 15 minutes

    try {
      await user.save();
      await sendEmail(
        user.email,
        'Welcome to Pawalaya',
        `<h1>Your OTP is ${otp}</h1><p>Reset your password!</p>`
      );
    } catch (mailError) {
      console.error('Error sending email:', mailError.message);
      return res.status(500).json({
        message: 'Failed to send reset OTP.',
        success: false,
        error: mailError.message,
      });
    }

    return res.json({
      message: 'OTP sent successfully.',
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: 'Server error.',
      success: false,
      error: error.message,
    });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !newPassword || !otp) {
    return res.json({
      message: 'All fields are required.',
      success: false,
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: 'User not found.',
        success: false,
      });
    }

    if (otp !== user.resetOtp) {
      return res.json({ message: 'OTP doesn’t match.' });
    }

    if (user.resetOtpExpiresAt < Date.now()) {
      return res.json({ message: 'OTP expired.', success: false });
    }

    const hashedNewPw = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPw;
    await user.save();

    return res.json({
      message: 'Password reset successfully.',
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: 'Server error.',
      success: false,
      error: error.message,
    });
  }
};

// Log out
export const logOut = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.json({ message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.json({
      message: 'Password and confirmPassword should be the same',
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: 'User not found',
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.json({ message: "Password doesn't match" });
    }

    res.clearCookie('authToken', { httpOnly: true });

    return res.json({
      success: true,
      message: 'User logged out successfully',
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      error: error.message,
      message: 'Cannot log out',
    });
  }
};

