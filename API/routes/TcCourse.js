const express = require("express");
const db = require("../modules/connect-mysql");
const upload = require("../modules/upload-images");

const router = express.Router();

async function getListData(req, res) {
  
  const perPage = 5;
  let page = parseInt(req.query.page) || 1;
  let keyword = req.query.keyword || "";
  keyword = keyword.trim(); //去掉頭尾的空白

  // res.locals.keyword = keyword; // 傳給template
  const output = {};

  // sql = SELECT * FROM `course`LEFT JOIN `member` ON `course`.`teacher_sid`=`member`.`sid` WHERE `member`.`sid` = 1 AND `course`.`course_name` LIKE 'A%';

  let teacherSid = req.query.teacherSid;


  let where = `LEFT JOIN \`member\` ON \`course\`.\`teacher_sid\`=\`member\`.\`sid\` WHERE \`member\`.\`sid\` =${teacherSid} `;
  if (keyword) {
    output.keyword = keyword;
    where += ` AND \`course\`.\`course_name\` LIKE ${db.escape(
      "%" + keyword + "%"
    )} `;
  }
  // 有其他條件可以用差不多的寫法加在sql後面

  const t_sql = `SELECT COUNT(1) totalRows FROM \`course\` ${where}`;

  const [[{ totalRows }]] = await db.query(t_sql);

  output.totalRows = totalRows;
  output.totalPages = Math.ceil(totalRows / perPage);
  output.perPage = perPage;
  output.rows = [];
  output.page = page;

  // 如果有資料才去取得分業的資料
  if (totalRows > 0) {
    if (page < 1) {
      output.redirect = "?page=1";
      return output;

      /*
            // 下面是原本的寫法，但在用redirect的function時，就不能這樣寫
            // return res.redirect(req.baseUrl);// 會轉到根目錄
            // return res.redirect('?page=1');
            */
    }
    if (page > output.totalPages) {
      output.redirect = "?page=" + output.totalPages;
      return output;

      /*
            // return res.redirect('?page=1' + output.totalPages);
            */
    }
    const sql = `SELECT \`course\`.*, \`member\`.\`firstname\`  FROM \`course\` ${where} ORDER BY \`course\`.\`sid\` DESC LIMIT ${
      (page - 1) * perPage
    }, ${perPage}`;
    /* 如果要用backtick，在名稱的地方要加上\`做跳脫 */
    const [rows] = await db.query(sql);
    output.rows = rows;
  }
  return output;
}

router.get("/api/list", async (req, res) => {
  const output = await getListData(req, res);
  res.json(output);
});

router.delete("/delete/:sid([0-9]+)", async (req, res) => {
  // '/delete/:sid([0-9]+' 以防用戶在網址列輸入數值以外的東西
  const sql = "DELETE FROM course WHERE sid=?";
  const [result] = await db.query(sql, [req.params.sid]);
  console.log({
    result,
  });
  res.json(result);
});

router.route("/add").post(async (req, res) => {
  // TODO: 欄位檢查
  const output = {
    success: false,
  };

  // mysql2 的套件語法，並不是標準的sql寫法
  const input = {
    ...req.body,
    created_at: new Date(),
  };
  const sql = "INSERT INTO `course` SET ?";
  let result = {};
  // 處理新增資料時可能的錯誤
  try {
    [result] = await db.query(sql, [input]);
  } catch (ex) {
    output.error = ex.toString();
  }
  output.result = result;
  if (result.affectedRows && result.insertId) {
    output.success = true;
  }

  console.log({
    result,
  });

  res.json(output);
});

router
  .route("/edit/:sid")
  .get(async (req, res) => {
    const sql = "SELECT * FROM course WHERE sid=?";
    const [rs] = await db.query(sql, [req.params.sid]);
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
    const sql = "UPDATE `course` SET ? WHERE sid=?";
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
