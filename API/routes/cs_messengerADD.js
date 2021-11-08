const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../modules/connect-mysql');

router.post('/',async(req,res)=>{
  const messenger = req.body.messenger
  const score = req.body.score


  const output = {
    success: false,
    postData: req.body,
  }

  //欄位檢查
  if(messenger==='' ){
    output.success = false
    output.error = '未填寫訊息'
  }
  if(score==='' ){
    output.success = false
    output.error = '未填寫訊息'
  }

  const sql = "INSERT INTO `cs_messenger`" + "(`st_sid`,`cs_sid`, `nickname`,`st_pictuer`, `messenger`, `score`, `great` , `created_date`) VALUES (?,?,?,?,?,?,?,NOW())";


  let result;
  try {
    [result] = await db.query(sql, [
      req.body.st_sid,
      req.body.cs_sid,
      req.body.nickname,
      req.body.st_pictuer,
      req.body.messenger,
      req.body.score,
      req.body.great,
    ]);

    if (result.affectedRows === 1) {
      output.success = true;
      output.result = result;
      
    } else {
      output.error = '無法新增訊息';
    }
  } catch (ex) {
    console.log(ex)
  }
  res.json(output);
  });

  module.exports = router;

