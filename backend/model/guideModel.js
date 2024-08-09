module.exports = (sequelize, DataTypes) => {
    const Guide = sequelize.define("guide", {
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      language_spoken: {
        type: DataTypes.STRING,
        allowNull : false
      },
      availability: {
        type: DataTypes.STRING,
        allowNull:false
      },
    });
    return Guide;
  };