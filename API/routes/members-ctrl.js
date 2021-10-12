const express = require('express');
const db = require('./../modules/connect-mysql');


const router = express.Router();

router.get('/', (req,res)=>{
    res.send('corps-backend-ctrl')
});

module.exports = router;