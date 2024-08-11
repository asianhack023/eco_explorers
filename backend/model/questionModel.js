module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("question", {
     
      image: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
        
      }

    
    });
    return Question;
  };