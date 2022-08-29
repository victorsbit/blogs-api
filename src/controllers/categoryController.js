const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const { code, message, category } = await categoryService.create(name);
    if (message) return res.status(code).json({ message });

    return res.status(code).json(category);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();

    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

module.exports = { create, getAll };
