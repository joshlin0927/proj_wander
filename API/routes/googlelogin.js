const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("./../modules/connect-mysql");
const router = express.Router();

router.post('/',async(req,res)=>{
  const output = {
    success: false,
    token: null,
  };

  const [rs] = await db.query(`SELECT * FROM \`member\` WHERE \`email\`= ?`, [
    req.body.email.toLowerCase(),
  ]);

  if (!rs.length) {
    output.error = '尚未註冊';
    
  }

  const success = await bcrypt.compare(req.body.password, rs[0].password);
  
  if (success) {
    output.success = true
  }
   res.json(output);
})
module.exports = router