const { User } = require('../database/models');

const isUserValid = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email, password } });

    if (!user) return false;

    return user;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { isUserValid };
