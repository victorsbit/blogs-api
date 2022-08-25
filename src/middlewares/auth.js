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

module.exports = { loginAuth };
