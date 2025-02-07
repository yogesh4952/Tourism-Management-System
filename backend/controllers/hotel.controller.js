import Hotel from '../models/hotel.model.js';

export const getAllHotels = async (req, res) => {
  try {
    const data = await Hotel.find({});
    res.json({ data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server error', error: error.message });
  }
};

const getHotelsByDistrict = async (district) => {
  try {
    const hotels = await Hotel.find({ district });
    if (!hotels.length) {
      return { message: 'No hotels found in this district' };
    }
    return hotels;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw new Error('Server error');
  }
};

export const getHotelByDistrict = async (req, res) => {
  try {
    const { district } = req.body;

    const hotels = await getHotelsByDistrict(district);
    res.json({ hotels });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createHotel = async (req, res) => {
  const { name, district, description, rating, isPremium } = req.body;
  const data = {
    name,
    district,
    description,
    isPremium,
  };

  const hotel = new Hotel(data);

  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ message: 'Error creating hotel: ' + error.message });
  }
};
