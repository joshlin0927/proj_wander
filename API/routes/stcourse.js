const express = require('express');
const router = express.Router();
const db = require('./../modules/connect-mysql');
const app = express();

async function getListData(req, res) {

  const perPage = 6;
  let page = parseInt(req.query.page) || 1;
 
  const output = {

  };

  let where = " WHERE \`order_main\`.\`member_sid\` = ?";
  

  const t_sql = `SELECT COUNT(1) totalRows FROM \`order_detail\` LEFT JOIN \`order_main\` ON \`order_detail\`.\`order_main_id\` = \`order_main\`.\`order_id\` LEFT JOIN \`course\` ON \`order_detail\`.\`product_sid\` = \`course\`.\`sid\` LEFT JOIN \`member\` ON \`course\`.\`teacher_sid\` = \`member\`.\`sid\` ${where}`;
  const [
    [{
      totalRows
    }]
  ] = await db.query(t_sql,[req.query.studentSid]);
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
    const sql = `SELECT * FROM \`order_detail\` LEFT JOIN \`order_main\` ON \`order_detail\`.\`order_main_id\` = \`order_main\`.\`order_id\` LEFT JOIN \`course\` ON \`order_detail\`.\`product_sid\` = \`course\`.\`sid\` LEFT JOIN \`member\` ON \`course\`.\`teacher_sid\` = \`member\`.\`sid\` WHERE \`order_main\`.\`member_sid\` = ? AND \`order_main\`.\`order_status\` = 1   ORDER BY \`course\`.\`sid\` DESC LIMIT ${(page-1)*perPage},${perPage}`;

    const [rows] = await db.query(sql, [req.query.studentSid])
    output.rows = rows;

  }
  return output;

}

router.getListData = getListData; //將function掛在router物件上

//這是拿到學生的購買課程
router.get('/api/coursedata', async (req, res) => {
  const output = await getListData(req, res);
  res.json(output);
});


//這是拿到所有課程資料(測試用)
router.get('/list',async(req,res)=>{
   const sql = `SELECT * FROM \`course\` WHERE 1 `;
   
   const [rs] = await db.query(sql);
   res.json([rs])
})


// 獲取已購買並要播放的課程內容
router.get('/classroom', async(req,res)=>{
  const sql = "SELECT `video_list`.*, `course`.`sid`, `order_detail`.`order_main_id`, `order_detail`.`product_sid`, `order_main`.`order_id`, `order_main`.`order_status` FROM `order_detail` LEFT JOIN `order_main` ON `order_detail`.`order_main_id` = `order_main`.`order_id` LEFT JOIN `course` ON `order_detail`.`product_sid` = `course`.`sid` LEFT JOIN `video_list` ON `course`.`sid` = `video_list`.`course_sid` WHERE `course`.`sid` = ? AND `order_main`.`order_status` = 1"

  const [result]=await db.query(sql, [req.query.courseSid])
  res.json(result)
})

 module.exports = router;




