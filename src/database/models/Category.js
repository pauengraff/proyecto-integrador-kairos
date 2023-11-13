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
      tableName: "category",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Product, {
      as: "products",
      foreignKey: "id_category",
    });
  };
  return Model;
};
