const postService = require('../services/postService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;

    const { code, message, result } = await postService.create({ title, content, categoryIds });

    if (message) return res.status(code).json({ message });

    return res.status(code).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const getAll = async (_req, res) => {
  try {
    const posts = await postService.getAll();

    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const { code, message, post } = await postService.getById(id);

    if (message) return res.status(code).json({ message });

    return res.status(code).json(post);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

module.exports = { create, getAll, getById };
