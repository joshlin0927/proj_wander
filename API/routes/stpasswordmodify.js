const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');

//讀取該筆會員資料，為了讓前端確認原密碼欄位是否填寫正確
router.get('/getdata',async(req,res)=>{
    let studentSid = req.query.studentSid
    const sql = `SELECT * FROM \`member\` WHERE \`sid\` = ?`;
    const [rs] = await db.query(sql, [studentSid]);

    res.json([rs]);
})

router.post('/modify',async(req,res)=>{
  const output={
    success:false,
    error:false,
    postData:req.body,
  }
   const input = {
     ...req.body,
   };

   const sql = `UPDATE \`member\` SET ? WHERE \`sid\` = ?`;
   let result = {};

   try {
     [result] = await db.query(sql, [input, req.query.studentSid]);
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
