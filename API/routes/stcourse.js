const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');
const app = express();

async function getListData(req, res) {

  const perPage = 6;
  let page = parseInt(req.query.page) || 1;
 
  const output = {

  };

  let where = " WHERE \`order_main\`.\`member_sid\` = 1";
  

  const t_sql = `SELECT COUNT(1) totalRows FROM \`order_detail\` LEFT JOIN \`order_main\` ON \`order_detail\`.\`order_main_id\` = \`order_main\`.\`order_id\` LEFT JOIN \`course\` ON \`order_detail\`.\`product_sid\` = \`course\`.\`sid\` LEFT JOIN \`member\` ON \`course\`.\`teacher_sid\` = \`member\`.\`sid\` ${where}`;
  const [
    [{
      totalRows
    }]
  ] = await db.query(t_sql);
  output.totalRows = totalRows;
  output.totalPages = Math.ceil(totalRows / perPage);
  output.perPage = perPage;
  output.rows = [];
  output.page = page;


  if (totalRows > 0) {
    if (page < 1) {
      output.redirect = '?page=1';
      return output;
    }
    if (page > output.totalPages) {
      return output.redirect = '?page=' + output.totalPages;
      return output;
    }
    const sql = `SELECT * FROM \`order_detail\` LEFT JOIN \`order_main\` ON \`order_detail\`.\`order_main_id\` = \`order_main\`.\`order_id\` LEFT JOIN \`course\` ON \`order_detail\`.\`product_sid\` = \`course\`.\`sid\` LEFT JOIN \`member\` ON \`course\`.\`teacher_sid\` = \`member\`.\`sid\` WHERE \`order_main\`.\`member_sid\` = 1 ORDER BY \`course\`.\`sid\` DESC LIMIT ${(page-1)*perPage},${perPage}`;

    const [rows] = await db.query(sql)
    output.rows = rows;

  }
  return output;

}

router.getListData = getListData; //將function掛在router物件上

router.get('/api/coursedata', async (req, res) => {
  const output = await getListData(req, res);
  res.json(output);
});

 module.exports = router;