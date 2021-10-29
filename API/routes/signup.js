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
  if(lastname==='' || firstname===''){
    output.success = false
    output.error = '姓名欄位未填寫'
  }
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!(emailRegexp.test(email))){
    output.success=false
    output.error='Email格式不符'
  }
  if (password.length<5){
    output.success = false
    output.error = '密碼長度太短'
  }
  

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
    console.log(ex)
  }
  res.json(output);
  });

  module.exports = router;

