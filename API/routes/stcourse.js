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

router.get('/hasBoughtItem', async (req, res)=>{
  const output = {
    success: false,
    error:'',
  }
  const sql = 
  `SELECT order_main.*, order_detail.product_sid
  FROM order_main 
  LEFT JOIN order_detail
  ON order_main.order_id = order_detail.order_main_id
  WHERE order_main.member_sid=? AND order_detail.product_sid=?`;
  const [r] = await db.query(sql, [req.query.member_sid, req.query.courseSid]);
  if(r && r[0].order_status===1){
    output.success = true;
  }else{
    output.error = '未購買的ID';
  }
  res.json(output);
})


//這是拿到所有課程資料(測試用)
router.get('/list',async(req,res)=>{
   const sql = `SELECT * FROM \`course\` WHERE 1 `;
   const [rs] = await db.query(sql);
   res.json([rs])
})


// 獲取已購買並要播放的課程內容
router.post('/boughtCourse', async(req,res)=>{
  const sql = "SELECT `video_list`.*,  `course`.`course_name`, `course`.`course_introduction`, `order_detail`.`order_main_id`, `order_detail`.`product_sid`, `order_main`.`order_id`, `order_main`.`member_sid`, `order_main`.`order_status` FROM `video_list` JOIN `order_detail` ON `order_detail`.`product_sid` = `video_list`.`course_sid`  JOIN `course` ON `course`.`sid` = `video_list`.`course_sid`  JOIN `order_main` ON `order_detail`.`order_main_id` = `order_main`.`order_id` WHERE `video_list`.`course_sid` = ? AND `order_main`.`member_sid` =?"

  const [result]=await db.query(sql, [req.body.courseSid, req.body.member_sid])
  res.json(result)
})

// 獲取全部的課程細節
router.post('/buyCourse', async(req,res)=>{
  const sql = "SELECT * FROM `video_list`  WHERE `video_list`.`course_sid` = ? "

  const [result]=await db.query(sql, [req.body.courseSid])
  res.json(result)
})


router.post('/videos', async(req,res)=>{
  const sql = "SELECT `video_list`.*, `order_detail`.`order_main_id`, `order_detail`.`product_sid`, `order_main`.`order_id`, `order_main`.`member_sid`, `order_main`.`order_status` FROM `video_list` LEFT JOIN `order_detail` ON `order_detail`.`product_sid` = `video_list`.`course_sid` LEFT JOIN `order_main` ON `order_detail`.`order_main_id` = `order_main`.`order_id` WHERE `video_list`.`sid` = ? AND `order_main`.`member_sid` =?"

  const [result]=await db.query(sql, [req.body.videoSid, req.body.member_sid])
console.log(result);
  res.json(...result)
})

 module.exports = router;




