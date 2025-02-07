import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './DB/db.js';
import * as Sentry from '@sentry/node';
import './instrument.js';
import userRoute from './routes/auth.route.js';
import destinationRoute from './routes/destination_hotel.route.js';
import premiumRoute from './routes/premium.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', userRoute);
app.use('/api/premium', premiumRoute);
app.use('/api/destination', destinationRoute);
// Basic route
app.get('/', (req, res) => {
  res.send('I am alive');
});

// Database connection
connectDB();

// Error handler must be after all routes
Sentry.setupExpressErrorHandler(app);

// Express server connection
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
