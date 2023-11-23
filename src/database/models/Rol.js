module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Rol",
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
      },
      {
        tableName: "rol",
        timestamps: false,
      }
    );

    Model.associate = (db) => {
      Model.hasMany(db.User, {
      as: "users",
      foreignKey: "id_rol",
    });
  };
  return Model;
};
    


