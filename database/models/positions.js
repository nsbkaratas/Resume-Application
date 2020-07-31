const db = require('../index');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;


const {Model, DataTypes} = require('sequelize');

class positions extends Model{}

positions.init(
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      position: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
     {
        sequelize,
        moduleName: "applications",
        tableName: 'applications',
        timestamps: false
    });
  
  

/*
const db = require('../index');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const {Model, DataTypes} = require('sequelize');

class Application extends Model{}

Application.init(
  {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
    },
    lastName: {
        type: DataTypes.STRING,        
        field: 'last_name',
    },
    email: {
        type: DataTypes.STRING,        
        field: 'email',
    },
    position: {
        type: DataTypes.STRING,        
        field: 'position',
    },
  },
  {
      sequelize,
      moduleName: "applications",
      tableName: 'applications',
      timestamps: false
  }
);

module.exports = Application;

  */