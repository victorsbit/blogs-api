const { BlogPost, Category, PostCategory, User } = require('../database/models');

const generateDate = () => {
  const d = new Date();
  const date = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}
     ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  return date;
};

const verifyFields = ({ title, content, categoryIds }) => {
  if (!title || !content || !categoryIds) {
    return false;
  }

  return true;
};

const verifyCategory = async (categoryIds) => {
  const result = await Promise
    .all(categoryIds.map((category) => Category.findByPk(category)))
    .then((values) => values);

  if (result.includes(null)) return false;

  return true;
};

const create = async ({ title, content, categoryIds }) => {
  const verify = verifyFields({ title, content, categoryIds });
  
  if (!verify) return { code: 400, message: 'Some required fields are missing' };

  const itExists = await verifyCategory(categoryIds);
  console.log(itExists);

  if (!itExists) return { code: 400, message: '"categoryIds" not found' };

  const date = generateDate();

  const result = await BlogPost.create({
    title,
    content,
    userId: 1,
    published: date,
    updated: date,
  });

  await Promise
    .all(categoryIds.map((id) => PostCategory.create({ postId: result.id, categoryId: id })));

  return { code: 201, message: '', result: { ...result.dataValues } };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({ 
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category, as: 'categories',
      },
    ],
  });

  return posts;
};

const doesThisPostExists = async (id) => BlogPost.findByPk(id);

const getById = async (id) => {
  const doesItExists = await doesThisPostExists(id);

  if (!doesItExists) return { code: 404, message: 'Post does not exist' };

  const post = await BlogPost.findOne({
    where: { id }, 
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category, as: 'categories',
      },
    ],
  });

  return { code: 200, message: '', post };
};

module.exports = { create, getAll, getById };
