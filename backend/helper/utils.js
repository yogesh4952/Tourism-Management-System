import * as crypto from 'crypto';
import jwt from 'jsonwebtoken';
import transporter from './nodemailer.js';

export const generateOtp = () => crypto.randomInt(100000, 999999);

export const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
    iat: Math.floor(Date.now() / 1000), // Current timestamp in seconds
  };

  // Check if the SECRET_STRING is present
  if (!process.env.SECRET_STRING) {
    throw new Error(
      'SECRET_STRING is not defined in the environment variables.'
    );
  }

  return jwt.sign(payload, process.env.SECRET_STRING, {
    expiresIn: '24h',
  });
};

export const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Failed to send email');
  }
};
