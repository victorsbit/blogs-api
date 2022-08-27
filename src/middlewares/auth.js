require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const loginAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) { 
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const validateToken = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(token, secret);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = { loginAuth, validateToken };
