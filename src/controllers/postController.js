const postService = require('../services/postService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;

    const { code, message, result } = await postService.create({ title, content, categoryIds });

    if (message) return res.status(code).json({ message });

    return res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

module.exports = { create };
