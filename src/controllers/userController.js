const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const { code, message, token } = await userService
      .create({ displayName, email, password, image });

    if (!message) return res.status(code).json({ token });

    return res.status(code).json({ message });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const getAll = async (_req, res) => {
  try {
    const allUsers = await userService.getAll();

    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

module.exports = { create, getAll };
