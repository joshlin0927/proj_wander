const express = require("express");
const multer = require("multer");
const db = require("../modules/connect-mysql");
const uploadImg = require("../modules/upload-images");

const router = express.Router();

// router.use( async (req, res) => {
//   const output = {
//     success: false,
//   };

//   // 判斷有沒有通過 jwt 驗證
//   if (req.myAuth && req.myAuth.sid) {

//     console.log(req.myAuth.sid);

//     output.member = req.myAuth;
//     output.success = true;

//   } else {
//     output.error = "沒有 token 或者 token 不合法";
//   }

//   res.json(output);
// });

router
  .route("/edit")
  .get(async (req, res) => {
    const sql = `SELECT * FROM \`member\` WHERE \`sid\`=?`;
    const [rs] = await db.query(sql, [req.query.teacherSid]);
    // console.log(sql);
    // console.log(res.json([rs]));

    res.json(rs);
  })
  .post(uploadImg.single("avatar"), async (req, res) => {
    console.log(req.body.avatar);
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
