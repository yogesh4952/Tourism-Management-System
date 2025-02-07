import Guide from '../models/guide.model.js';

// Add a new guide
export const addGuide = async (req, res) => {
  try {
    // Destructure specific fields from the request body
    const { name, email, phone, expertise, rating, isAvailable } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: 'Name, email, and phone are required.' });
    }

    // Create a new guide with the extracted data
    const newGuide = new Guide({
      name,
      email,
      phone,
      expertise: expertise || 'General guide',
      rating: rating || 0,
      isAvailable: isAvailable !== undefined ? isAvailable : true,
    });

    await newGuide.save();
    res
      .status(201)
      .json({ message: 'Guide added successfully', guide: newGuide });
  } catch (error) {
    res.status(500).json({ message: 'Error adding guide: ' + error.message });
  }
};

// Get all guides
export const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json({ guides });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching guides: ' + error.message });
  }
};

// Get a single guide by ID
export const getGuideById = async (req, res) => {
  try {
    const guideId = req.params.id;
    const guide = await Guide.findById(guideId);

    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res.status(200).json({ guide });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching guide: ' + error.message });
  }
};

// Update a guide by ID
export const updateGuide = async (req, res) => {
  try {
    const guideId = req.params.id;
    const updatedData = req.body;

    const updatedGuide = await Guide.findByIdAndUpdate(guideId, updatedData, {
      new: true,
    });

    if (!updatedGuide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res
      .status(200)
      .json({ message: 'Guide updated successfully', guide: updatedGuide });
  } catch (error) {
    res.status(500).json({ message: 'Error updating guide: ' + error.message });
  }
};

// Delete a guide by ID
export const deleteGuide = async (req, res) => {
  try {
    const guideId = req.params.id;

    const deletedGuide = await Guide.findByIdAndDelete(guideId);

    if (!deletedGuide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res.status(200).json({ message: 'Guide deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting guide: ' + error.message });
  }
};

// Search guides by expertise or location
export const searchGuides = async (req, res) => {
  try {
    const { expertise, preferredRegions } = req.query;

    const filters = {};
    if (expertise) filters.expertise = { $regex: expertise, $options: 'i' };
    if (preferredRegions)
      filters.preferredRegions = { $regex: preferredRegions, $options: 'i' };

    const guides = await Guide.find(filters);
    res.status(200).json({ guides });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error searching guides: ' + error.message });
  }
};
