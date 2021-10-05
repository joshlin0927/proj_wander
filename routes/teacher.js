const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('./../modules/connect-mysql');
const multer = require('multer');
const upload = multer({
    dest: 'tmp_uploads/'
});
const uploadImg = require('./../modules/upload-images');
const uploadVid = require('./../modules/upload-videos');


const router = express.Router();


router.get('/', (req, res) => {
    res.send('<h2>teacher</h2>');
});

router.get('/profile',async (req,res)=>{
    res.send('<h2></h2>')
});

router.get('/password',async (req,res)=>{
    res.send('<h2></h2>')
});

router.get('/tc_course', require('./course'));

router.get('/analytic',async (req,res)=>{
    res.send('<h2></h2>')
});
module.exports = router;