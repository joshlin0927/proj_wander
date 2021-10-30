const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

//讀取該筆會員資料，為了讓前端確認原密碼欄位是否填寫正確
router.get('/getdata', async (req, res) => {
  const output = {
    success: false,
    error: '',
  }
  let studentSid = req.query.studentSid
  const sql = `SELECT * FROM \`member\` WHERE \`sid\` = ?`;

  const [rs] = await db.query(sql, [studentSid]);

  //TODO:上面已經取出該筆資料，要怎麼和前端輸入密碼做比對？

  const success = await bcrypt.compare(req.body.password, rs[0][0].password);
  if (success) {
    output.success = true;
  } else {
    output.error = '密碼輸入錯誤'
  }
  res.json(output);

})

router.post('/modify', async (req, res) => {
  const output = {
    success: false,
    error: '',
    postData: req.body,
  }

  const hash = await bcrypt.hash(req.body.password, 10);

  const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`sid\` = ?`;
  let result={};

  try {
    [result] = await db.query(sql, [hash, req.query.studentSid]);
  } catch (ex) {
    output.error = ex.toString();
  }
  output.result = result;
  if (result.affectedRows === 1) {
    if (result.changedRows === 1) {
      output.success = true;
    } else {
      output.error = "資料沒有變更";
    }
  }

  res.json(output);

});

module.exports = router;
