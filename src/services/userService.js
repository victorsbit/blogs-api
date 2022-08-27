const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

const isEmailValid = async (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regex.test(email)) {
    return {
      code: 400,
      message: '"email" must be a valid email',
    };
  }
  
  const doesItExist = await User.findOne({ where: { email } });

  if (doesItExist) {
    return {
      code: 409,
      message: 'User already registered',
    };
  }

  return { code: null, message: null };
};

const isNewUserValid = async (displayName, password, email) => {
  if (displayName.length < 8) {
    return { 
      code: 400,
      message: '"displayName" length must be at least 8 characters long',
    };
  }

  if (password.length < 6) {
    return {
      code: 400,
      message: '"password" length must be at least 6 characters long',
    };
  }

  return isEmailValid(email);
};

const create = async ({ displayName, email, password, image }) => {
  try {
    const { code, message } = await isNewUserValid(displayName, password, email);

    if (code) return { code, message };

    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ email }, secret, jwtConfig);

    return { code: 201, message: '', token };
  } catch (e) {
    console.log(e.message);
  }
};

const getAll = async () => User.findAll({
  attributes: { exclude: ['password'] },
});

module.exports = { create, getAll };
