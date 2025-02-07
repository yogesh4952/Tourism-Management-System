import Destinations from '../models/destination.model.js';

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

export const getDestinationById = async (req, res) => {
  const { id } = req.params;

  try {
    const destination = await Destinations.findById(id);

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    res.json({ destination });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching destination: ' + error.message });
  }
};

export const createDestination = async (req, res) => {
  let { name, district, description, activities, hotels } = req.body;

  const destination = new Destinations({
    name: name.toLowerCase(),
    district: district.toLowerCase(),
    description,
    activities,
    hotels,
  });

  try {
    const newDestination = await destination.save();

    res.status(201).json(newDestination);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating destination: ' + error.message });
  }
};

export const updateDestination = async (req, res) => {
  const { id } = req.params;

  try {
    const destination = await Destinations.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    res.json(destination);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating destination: ' + error.message });
  }
};

export const getDestinationByDistrict = async (req, res) => {
  try {
    const { district } = req.body;

    const destinations = await Destinations.find({ district });

    if (!destinations.length) {
      return res
        .status(404)
        .json({ message: 'No destinations found in this district' });
    }

    res.json({ destinations });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  const { id } = req.params;

  try {
    const destination = await Destinations.findByIdAndDelete(id);

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    res.json({ message: 'Destination deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting destination: ' + error.message });
  }
};

export const deleteAll = async (req, res) => {
  try {
    await Destinations.deleteMany({});

    res.json({ message: 'All destinations deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting destinations: ' + error.message });
  }
};
