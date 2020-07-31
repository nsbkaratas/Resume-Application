const express = require('express'); 
const router =express.Router();
const ApplicationService = require('./libs');

router.post('/', async function(req, res) {
  //console.log(req.body)
  const {first_name, last_name, email, position} = req.body;
  console.log(req.body.application)
  const application = await ApplicationService.createApplication(first_name, last_name,email,position);
  console.log(application.toJSON);
  res.send(application);
});

module.exports = router;