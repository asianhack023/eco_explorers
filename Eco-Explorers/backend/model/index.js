const dbConfig = require("../dbconfig/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port : 3306, 

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importing model files 
db.users = require("./userModel.js")(sequelize, DataTypes);
db.questions = require("./questionModel.js")(sequelize,DataTypes);
db.answers = require("./answerModel.js")(sequelize,DataTypes);
db.guides = require("./guideModel.js")(sequelize, DataTypes);
db.attractions = require("./attractionModel.js")(sequelize, DataTypes);
db.gallerys = require("./galleryModel.js")(sequelize, DataTypes);

db.users.hasMany(db.gallerys)
db.gallerys.belongsTo(db.users)

db.users.hasOne(db.guides)
db.guides.belongsTo(db.users)

db.users.hasMany(db.questions)
db.questions.belongsTo(db.users)

db.questions.hasMany(db.answers)
db.answers.belongsTo(db.questions)

db.users.hasMany(db.answers)
db.answers.belongsTo(db.users)

db.sequelize.sync({ force: false}).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;