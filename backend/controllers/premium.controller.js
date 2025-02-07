import User from '../models/user.model.js';

export const checkIsPremium = async (req, res) => {
  console.log(req.user);
};

export const upgradeToPremium = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // if
};
