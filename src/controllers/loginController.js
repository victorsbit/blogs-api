require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginService.isUserValid({ email, password });
    if (!result) return res.status(400).json({ message: 'Invalid fields' });

    const token = jwt.sign({ email }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

module.exports = { login };
