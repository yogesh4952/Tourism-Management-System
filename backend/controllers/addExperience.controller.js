import Experience from '../models/experience.model.js';

export const addExperience = async (req, res) => {
  try {
    const { title, description, content, location, images, tags, rating } =
      req.body;

    const { userId } = req.user;
    console.log('User ID:', userId);
    const newExperience = new Experience({
      title,
      description,
      content,
      location,
      images,
      userId,
      tags,
      rating,
    });

    await newExperience.save();

    res.status(201).json({
      message: 'Experience added successfully',
      experience: newExperience,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error adding experience: ' + error.message });
  }
};
