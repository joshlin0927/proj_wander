const express = require("express");
const db = require("../modules/connect-mysql");
const upload = require("../modules/upload-images");

const router = express.Router();

router
  .route("/edit/:sid")
  .get(async (req, res) => {
    // console.log("sid", req.params.sid);

    let sid = req.params.sid;

    const sql = `SELECT * FROM \`member\` WHERE \`sid\` = ${sid}`;
    const [rs] = await db.query(sql);
    // console.log(sql);
    // console.log(res.json([rs]));

    res.json([rs]);
  })
  .post(async (req, res) => {
    // TODO: 欄位檢查
    const output = {
      success: false,
      postData: req.body,
    };

    const input = {
      ...req.body,
    };
    const sql = "UPDATE `member` SET ? WHERE sid=?";
    let result = {};
    // 處理修改資料時可能的錯誤
    try {
      [result] = await db.query(sql, [input, req.params.sid]);
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
