module.exports = (sequelize, DataTypes) => {
    const Route = sequelize.define("route", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull : false
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull:false
      }, 
      location: {
        type: DataTypes.STRING,
        
    }
    });
    return Route;
  };