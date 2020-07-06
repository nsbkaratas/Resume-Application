const Sequelize = require('sequelize');

module.exports = new Sequelize('myDB', 'postgres', 'Yasirsafiye13', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
  ma : 5,
  min: 0,
  acquire: 30000,
  idle: 10000
  },
});
