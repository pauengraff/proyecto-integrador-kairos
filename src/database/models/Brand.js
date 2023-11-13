module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Brand",
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
      tableName: "brand",
      timestamps: false,
    }
  );
  Model.associate = (db) => {
    Model.hasMany(db.Product, {
      as: "products",
      foreignKey: "id_brand",
    });
  };
  return Model;
};
