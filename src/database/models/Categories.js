module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "categories",
      timestamps: false,
      //createdAt: "created_at",
      //updatedAt: "updated_at",
      //deletedAt: false,
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Product, {
      as: "products",
      foreignKey: "genre_id",
    });
  };
  return Model;
};
