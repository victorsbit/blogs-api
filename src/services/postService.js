const { BlogPost, Category, PostCategory } = require('../database/models');

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
  const itExists = await Promise
    .all(categoryIds.map((category) => Category.findByPk(category)))
    .then((values) => {
      if (values.every((cat) => cat === null)) {
        return false;
      }

      return true;
    });

  return itExists;
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

  [1, 2].forEach(async (categoryId) => PostCategory.create({ categoryId, postId: result.id }));

  return { code: 201, message: '', result: { ...result.dataValues } };
};

module.exports = { create };
