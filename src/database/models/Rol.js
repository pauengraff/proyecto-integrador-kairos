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
        tableName: "roles",
        timestamps: false,
      }
    );
};
    


