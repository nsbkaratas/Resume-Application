const Login = require('../../database/models/login');

exports.createLogin = function (email, password) {
    return Login.create({
        email,
        password,
    });
}