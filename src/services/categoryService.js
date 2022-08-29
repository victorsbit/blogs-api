const { Category } = require('../database/models');

const create = async (name) => {
  if (!name) return { code: 400, message: '"name" is required' };

  const { id } = await Category.create({ name });

  return { code: 201, message: '', category: { id, name } };
};

const getAll = async () => Category.findAll();

module.exports = { create, getAll };
