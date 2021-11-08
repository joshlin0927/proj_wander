const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../modules/connect-mysql");
const uploadImg = require("../modules/upload-images");
const uploadPdf = require("../modules/upload-pdf");

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

router.route("/apply").post(uploadPdf.single("resume"), async (req, res) => {
  const output = {
    success: false,
    error: "",
    postData: req.body,
  };

  const input = {
    ...req.body,
    resume: req.file.filename,
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

router
  .route("/edit")
  .get(async (req, res) => {
    const sql = `SELECT * FROM \`member\` WHERE \`sid\`=?`;
    const [rs] = await db.query(sql, [req.query.teacherSid]);

    res.json(rs);
  })

  .post(async (req, res) => {
    const output = {
      success: false,
      error: "",
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

router.route("/avatar").post(uploadImg.single("avatar"), async (req, res) => {
  const output = {
    success: false,
    error: "",
    postData: req.body,
  };

  const sql = `UPDATE \`member\` SET \`avatar\` = ? WHERE \`sid\` = ?`;

  try {
    [result] = await db.query(sql, [req.file.filename, req.body.teacherSid]);
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

router.route("/passEdit").post(async (req, res) => {
  const output = {
    success: false,
    error: "",
    postData: req.body,
  };

  const [rs] = await db.query("SELECT * FROM member WHERE `email`=?", [
    req.body.email,
  ]);

  const success = await bcrypt.compare(req.body.origin, rs[0].password);

  if (success) {
    const hash = await bcrypt.hash(req.body.newPass, 10);
    const sql = `UPDATE \`member\` SET \`password\`= ? WHERE \`sid\` = ?`;
    let result = {};
    try {
      [result] = await db.query(sql, [hash, req.body.teacherSid]);
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
  } else {
    output.error = "密碼錯誤";
  }

  res.json(output);
});

module.exports = router;
