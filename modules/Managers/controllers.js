const express = require('express');
const router =express.Router();
const LoginService = require('./libs');
const bcrypt = require("bcrypt")
const  jwt  =  require('jsonwebtoken');
const SECRET_KEY="secretkey23456"


router.post('/', async function(req, res) {
  //console.log(req.body)
  const {email, password} = req.body;

  const login = await LoginService.createLogin(email,password);
  console.log(login.toJSON);
  res.send(login);
});

module.exports = router
