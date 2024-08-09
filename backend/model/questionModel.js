module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("question", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull : false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull:false
      }

    
    });
    return Question;
  };