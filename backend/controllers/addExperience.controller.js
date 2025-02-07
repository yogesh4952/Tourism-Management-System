import Experience from '../models/experience.model.js';

export const addExperience = async (req, res) => {
  try {
    const { title, description, content, location, images, tags, rating } =
      req.body;

    // Ensure user is authenticated and has a valid ID
    // if (!req.user || !req.user._id) {
    //   return res.status(401).json({ message: 'Unauthorized user' });
    // }

    if (!title || !description || !content || !location) {
      return res
        .status(400)
        .json({ message: 'Please provide all required fields.' });
    }

    // const userId = req.user._id;
    // console.log('User ID:', userId);

    const newExperience = new Experience({
      title,
      description,
      content,
      location,

      tags,
      rating,
      images: images || [],
    });

    await newExperience.save();

    res.status(201).json({
      message: 'Experience added successfully',
      experience: newExperience,
    });
  } catch (error) {
    console.error('Error adding experience:', error);
    res
      .status(500)
      .json({ message: `Error adding experience: ${error.message}` });
  }
};

export const getAllExperiences = async (req, res) => {
  try {
    // Fetch all experiences sorted by the latest published date
    const experiences = await Experience.find()
      .sort({ likesCount: -1 }) // Show the most recent first
      .select('-__v'); // Exclude the MongoDB version field

    res.status(200).json({
      message: 'All experiences fetched successfully',
      experiences,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching experiences: ' + error.message,
    });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find experience by ID
    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({
      message: 'Experience fetched successfully',
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching experience: ' + error.message,
    });
  }
};

// Update an existing experience by ID
export const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content, location, images, tags, rating } =
      req.body;

    // Find the experience by ID and update it with new data
    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      {
        title,
        description,
        content,
        location,
        images,
        tags,
        rating,
      },
      { new: true, runValidators: true } // Return updated document and validate updates
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({
      message: 'Experience updated successfully',
      experience: updatedExperience,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating experience: ' + error.message });
  }
};

// Delete an experience by ID
export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the experience by its ID
    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({
      message: 'Experience deleted successfully',
      experience: deletedExperience,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting experience: ' + error.message });
  }
};

export const likeExperience = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the experience by ID
    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    // Increment the likes count by 1
    experience.likesCount += 1;

    // Save the updated experience
    await experience.save();

    res.status(200).json({
      message: 'Experience liked successfully',
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error liking experience: ' + error.message,
    });
  }
};

// Search experiences by title, location, tags, or content
