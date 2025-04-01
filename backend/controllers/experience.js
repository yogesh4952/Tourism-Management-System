import Experience from '../models/experience.model.js';

export const addExperience = async (req, res) => {
  try {
    const { title, description, content, location, images, tags, rating } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    if (!title || !description || !content || !location) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const userId = req.user.id;

    const newExperience = new Experience({
      title,
      description,
      content,
      location,
      userId,
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
    res.status(500).json({ message: `Error adding experience: ${error.message}` });
  }
};

export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find()
      .sort({ likesCount: -1 })
      .select('-__v');

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

export const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content, location, images, tags, rating } = req.body;

    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      { title, description, content, location, images, tags, rating },
      { new: true, runValidators: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({
      message: 'Experience updated successfully',
      experience: updatedExperience,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating experience: ' + error.message });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({
      message: 'Experience deleted successfully',
      experience: deletedExperience,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting experience: ' + error.message });
  }
};

export const likeExperience = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user._id;
    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    if (experience.likes.includes(userId)) {
      return res.status(400).json({ message: 'You already liked this experience' });
    }

    experience.likes.push(userId);
    experience.likesCount = experience.likes.length;

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

export const dislikeExperience = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id;
    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    const likeIndex = experience.likes.indexOf(userId);
    if (likeIndex === -1) {
      return res.status(400).json({ message: "You haven't liked this experience" });
    }

    experience.likes.splice(likeIndex, 1);
    experience.likesCount = experience.likes.length;

    await experience.save();

    res.status(200).json({
      message: 'Experience unliked successfully',
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error unliking experience: ' + error.message,
    });
  }
};