const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');
const app = express();

async function getAccountData(req, res) {
  const output = {};
  const sql = `SELECT \`email\` FROM \`member\` WHERE 1`;
  const [rows] = await db.query(sql)
  output.rows = rows;
  return output
}

router.get('/',async(req,res)=>{
  const output = await getAccountData(req, res);
  res.json(output);
})

module.exports = router;
