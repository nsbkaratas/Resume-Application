const express = require('express')
const router = express.Router();
const Application =require('../database/models/applications');
const cors = require('cors');

router.use(cors());


router.get('/getdata', async (req,res) => 
   Application.findAll()
   .then(apps => {
       res.json({apps});
       console.log('users', apps);
   })
   .catch(err => console.log(err))
)




module.exports = router
