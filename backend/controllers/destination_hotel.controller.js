import Destinations from '../models/destination.model.js';
import Hotel from '../models/hotel.model.js';

// Create and Save a new Destination
export const getAllDestinations = async (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query; // Add query params for pagination and search

  try {
    // Find all destinations with search and pagination
    const destinations = await Destinations.find({
      name: { $regex: search, $options: 'i' },
    }) // Simple case-insensitive search
      .skip((page - 1) * limit) // Skip based on the current page
      .limit(Number(limit)) // Limit number of results per page
      .lean(); // Use lean to get plain JavaScript objects for faster response

    const totalDestinations = await Destinations.countDocuments({
      name: { $regex: search, $options: 'i' },
    }); // Count documents for pagination

    console.log(totalDestinations);

    res.json({
      destinations,
      totalDestinations,
      totalPages: Math.ceil(totalDestinations / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching destinations: ' + error.message });
  }
};



