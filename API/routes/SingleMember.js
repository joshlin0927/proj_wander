const express = require("express");
const multer = require("multer");
const db = require("../modules/connect-mysql");
const uploadImg = require("../modules/upload-images");
const upload = multer({
  dest: 'tmp_uploads/'
});
const router = express.Router();

router
  .route("/edit")
  .get(async (req, res) => {
    let teacherSid = req.query.teacherSid;

    const sql = `SELECT * FROM \`member\` WHERE \`sid\` = ${teacherSid}`;
    const [rs] = await db.query(sql);
    // console.log(sql);
    // console.log(res.json([rs]));

    res.json([rs]);
  })
  .post(async (req, res) => {

    // TODO: 頭像上傳的引用
    
    const output = {
      success: false,
      postData: req.body,
    };

    const input = {
      ...req.body,
    };

    const sql = `UPDATE \`member\` SET ? WHERE sid=?`;
    let result = {};
    // 處理修改資料時可能的錯誤
    try {
      [result] = await db.query(sql, [input, req.query.teacherSid]);
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
