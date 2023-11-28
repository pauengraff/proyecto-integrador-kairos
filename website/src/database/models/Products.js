module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Model.associate = (db) => {
    Model.belongsTo(db.Category, {
      as: "category",
      foreignKey: "id_category",
    });

    Model.belongsTo(db.Brand, {
      as: "brand",
      foreignKey: "id_brand",
    });
  };
  return Model;
};
