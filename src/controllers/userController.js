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
  }
};

module.exports = { create };
