const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//對比密碼資料
router.get('/list', async (req, res) => {
  const output = {
    success: false,
    error: '',
  }
  const sql = `SELECT * FROM \`member\` WHERE email = ? `;
  const [r] = await db.query(sql, [req.query.email]);
  if (r && r.length === 1) {
    output.success = true;
    output.result = r
  } else {
    output.error = '無此帳號';
  }
  res.json(output)
})

//處理忘記密碼部分，把信箱新密碼送到資料庫
router.put('/update', async (req, res) => {
  const output = {
    success: false,
    error: '',
    result: '',
  }

  

  const hashedPassword = await bcrypt.hash(req.body.password.toString(), 10);
  const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`email\` = ?`;
  let result = {}

  const [r] = await db.query(sql, [hashedPassword, req.body.email])


  if (r.affectedRows === 1) {
    output.success = true;
    output.result = r;

  } else {
    output.error = '未修改'
  }
  res.json(output)

})

//處理密碼更改
router.put('/modify', async (req, res) => {
  console.log(
    req.body.body.origin
  )
  const output = {
    success: false,
    error: '',
    postData: req.body,
  }


   const [rs] = await db.query("SELECT * FROM member WHERE `sid`=?", [
     req.body.body.sid,
   ]);

  const success = await bcrypt.compare(req.body.body.origin, rs[0].password);


  if (success) {
  output.success=true;
  output.result=rs;


  const newPasswordhashed = await bcrypt.hash(req.body.body.newPassword, 10);
  const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`sid\` = ?`;
  const [r] = await db.query(sql, [newPasswordhashed, req.body.body.sid])
   if (r.affectedRows === 1) {
     output.success = true;
     output.result = r;

   } else {
     output.error = '未修改'
   }

  }else{
    output.error='輸入密碼錯誤'
  }
  res.json(output)
})










//   const hash = await bcrypt.hash(req.body.password, 10);


//   //  if (req.myAuth && req.myAuth.sid)
//   const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`sid\` = ?`;
//   let result = {};

//   try {
//     [result] = await db.query(sql, [hash, req.query.studentSid]);
//   } catch (ex) {
//     output.error = ex.toString();
//   }
//   output.result = result;
//   if (result.affectedRows === 1) {
//     if (result.changedRows === 1) {
//       output.success = true;
//     } else {
//       output.error = "資料沒有變更";
//     }
//   }

//   res.json(output);

// });

module.exports = router;
