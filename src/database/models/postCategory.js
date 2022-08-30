const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: { type: DataTypes.INTEGER, foreignKey: true },
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
      },
      categoryId: {
        type: { type: DataTypes.INTEGER, foreignKey: true },
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
      },
    },
    { timestamps: false },
  )

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogpost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;
