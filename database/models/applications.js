const Sequelize = require("sequelize")
const index = require("../index")
const { sequelize } = require("../index")

const Application = index.define("app", {
    first_name: {
        type: Sequelize.STRING,
    },
    last_name:{
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    position: {
        type: Sequelize.STRING
    }
}
)

Application.sync().then(() => {
    console.log("table created")
})

module.exports = Application