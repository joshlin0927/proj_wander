const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');

const multer = require('multer');
const upload = multer({
  dest: 'tmp_uploads/'
}); //建立upload物件，圖片會存到暫存資料夾
const uploadImg = require('../modules/upload-images'); //直接引用寫好的上傳圖檔模組

// 讀取資料
router.get('/list', async (req, res) => {
    let studentSid = req.query.studentSid
    const sql = `SELECT * FROM \`member\` WHERE \`sid\` = ?`;
    const [rs] = await db.query(sql, [studentSid]);
    res.json([rs]);
  })

  //傳送表單文字資料
  router.post('/edit', uploadImg.single('avatar'), async (req, res) => {

    const output = {
      success: false,
      postData: req.body,
      error: '',
      
    };

    const input = {
      ...req.body,
    };
    const sql = `UPDATE \`member\` SET ? WHERE \`sid\` = ?`;
    let result = {};

    // 處理修改資料時可能的錯誤
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