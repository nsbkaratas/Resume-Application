const Sequelize = require("sequelize")
const index = require("../index")
const { sequelize } = require("../index")
const bcrypt = require("bcrypt")


const Login = index.define("login", {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
 },

 {
    hooks: {
      beforeCreate: (login) => {
        const salt = bcrypt.genSaltSync();
        login.password = bcrypt.hashSync(login.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    }    
}

 /*{
     hooks: {
        afterValidate: function (login){
        login.password = bcrypt.hashSync(login.password, 8);
        }
    },        
 },*/

);
 


Login.sync().then(() => {
    console.log("table created")
})

module.exports = Login;

