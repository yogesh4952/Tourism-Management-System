import User from '../models/user.model.js';
import Hotel from '../models/hotel.model.js';

export const checkIsPremium = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }

  return res.json({ isPremium: req.user?.isPremium || false });
};

export const upgradeToPremium = async (req, res) => {
  try {
    const { email } = req.body;

    // Find and update the user's premium status in a single step
    const user = await User.findOneAndUpdate(
      { email },
      { isPremium: true },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isPremium) {
      return res.json({ message: 'User is already premium', user });
    }

    res.json({ message: 'User upgraded to premium', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getPremiumHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({ isPremium: true }).sort({ rating: -1 });

    if (hotels.length === 0) {
      return res.status(404).json({ message: 'No premium hotels' });
    }

    res.json({ hotels });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getPremiumHotelById = async (req, res) => {
  try {
    const { id } = req.params;

    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    if (!hotel.isPremium) {
      return res.status(401).json({ message: 'Hotel is not premium' });
    }

    res.json({ hotel });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
