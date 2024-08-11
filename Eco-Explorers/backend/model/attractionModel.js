module.exports = (sequelize, DataTypes) => {
    const Attraction = sequelize.define("attraction", {
      name: {
        type: DataTypes.STRING,
        allowNull : false
      },
      description: {
        type: DataTypes.STRING,
        allowNull : false
      },
      location: {
        type: DataTypes.STRING,
        allowNull : false
      },
      difficulty:{
        type: DataTypes.STRING,
        allowNull : false
      },
      media_url:{
        type: DataTypes.STRING,
        allowNull : false
      },
      reviews:{
        type: DataTypes.STRING
      },
      rating:{
        type: DataTypes.INTEGER
      }
    });
    return Attraction;
  };