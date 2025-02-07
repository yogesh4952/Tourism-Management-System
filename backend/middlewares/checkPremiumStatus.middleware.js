const checkPremiumStatus = (req, res, next) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!user.isPremium) {
      return res.status(401).json({ message: 'User is not premium' });
    }

    if (user.premiumValidate < Date.now()) {
      return res.status(401).json({ message: 'User premium has expired' });
    }

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server error', error: error.message });
  }
};

export default checkPremiumStatus;
