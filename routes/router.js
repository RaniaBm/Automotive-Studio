const express = require('express');
//import router
const router = express.Router();

//import the file from controllers folder
const r = require('../controllers/function.controllers');

router.get('/name', r.returnname);
router.get('/home', r.home);
router.get('/admin', r.admin);
router.get('/aboutus', r.aboutus);

//export the router 
module.exports = router;