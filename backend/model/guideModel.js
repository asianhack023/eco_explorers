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
      rate:{
        type: DataTypes.INTEGER
        
      },
      location:{
        type: DataTypes.STRING,
        allowNull:false
      },
      review:{
        type: DataTypes.STRING
      },
      identity:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Guide;
  };