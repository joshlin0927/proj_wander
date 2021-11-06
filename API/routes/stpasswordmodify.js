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

//把信箱新密碼送到資料庫
router.put('/update', async (req, res) => {
  const output = {
    success: false,
    error: '',
    result:'',
  }

   const hashedPassword = await bcrypt.hash(req.body.password.toString(), 10);
 //UPDATE `member` SET `password`= "123444" WHERE `email`="samar@mail"

    const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`email\` = ?`;
    let result={}
   
  const [r] = await db.query(sql, [hashedPassword, req.body.email])
  

    if (r.affectedRows===1) {
       output.success=true;
       output.result=r;
      
    }else{
      output.error='未修改'
    }
    
     res.json(output)
  


})
//忘記密碼使用路由
// router.put('/changed', async (req, res) => {
//   const output = {
//     success: false,
//     error: '',
//   }

//   const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`email\` = ?`;
//   const [r] = await db.query(sql, [req.body.password, req.query.email])
//     output.success = !!r.affectedRows ? true : false;
//     output.result = r;
//     return output;

// })







// router.put('/modify', async (req, res) => {
//   const output = {
//     success: false,
//     error: '',
//     postData: req.body,
//   }

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
