module.exports = (sequelize, DataTypes) => {
    const Gallery = sequelize.define("gallery", {
      caption: {
        type: DataTypes.STRING,
        allowNull : false
      },
      media_type: {
        type: DataTypes.STRING
        
      },
      media_url:{
        type: DataTypes.STRING,
        allowNull:false
      }
    });
    return Gallery;
  };