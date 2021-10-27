const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('./../modules/connect-mysql');

router.post('/',async(req,res)=>{
  const lastname = req.body.lastname
  const firstname = req.body.firstname
  const email = req.body.email
  const password = req.body.password


  const output = {
    success: false,
    postData: req.body,
  }

  //TODO: 欄位檢查

  //加密
  
  const hash = await bcrypt.hash(req.body.password, 10);

  const sql = "INSERT INTO `member`" + "(`identity`,`firstname`, `email`,`lastname`, `nickname`, `password` , `created_date`) VALUES (?,?,?,?,?,?,NOW())";
  let result;
  try {
    [result] = await db.query(sql, [
      req.body.identity,
      req.body.firstname,
      req.body.email,
      req.body.lastname,
      req.body.nickname,
      hash,  
    ]);

    if (result.affectedRows === 1) {
      output.success = true;
      output.result = result;
      
    } else {
      output.error = '無法新增會員';
    }
  } catch (ex) {
    console.log(ex);
    output.error = 'Email已被使用過'
  }
  res.json(output);
  });

  module.exports = router;

