const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./../modules/connect-mysql");

const router = express.Router();

router.post("/login-jwt", async (req, res) => {
  
  const output = {
    success: false,
    token: null,
  };

  const [rs] = await db.query(`SELECT * FROM \`member\` WHERE \`email\`= ?`, [
    req.body.email.toLowerCase(),
  ]);

  if (!rs.length) {
    // 帳號錯誤
  
    output.error="無此帳號"
  }
  const success = await bcrypt.compare(req.body.password, rs[0].password);
  // 這裡設定的是登入後的token要給的資料
  if (success) {
    const { sid, identity, email, nickname } = rs[0];
    output.success = true;
    output.member = {
      sid,
      identity,
      email,
      nickname,
    };
    output.token = await jwt.sign(
      {
        sid,
        identity,
        email,
        nickname,
      },
      process.env.JWT_SECRET
    );
  }

  res.json(output);
});

router.get("/login-jwt-verify", async (req, res) => {
  const output = {
    success: false,
    data: null,
  };

  // 判斷有沒有通過 jwt 驗證
  if (req.myAuth && req.myAuth.id) {
    output.member = req.myAuth;
    output.success = true;
    output.data = await getListData(req, res);
  } else {
    output.error = "沒有 token 或者 token 不合法";
  }

  res.json(output);
});
module.exports = router;
