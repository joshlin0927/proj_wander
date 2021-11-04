const express = require('express');
const db = require('../modules/connect-mysql');
const upload = require('../modules/upload-CourseImages');

const router = express.Router();

router.get('/list', async (req, res) => {
    res.locals.pageName = 'ab-list';
 
    const output = await getListData(req,res);
    if(output.redirect){
        return res.redirect(output.redirect);
    }

    // res.json(output);
    res.render('course/list', output);
});

async function getListData(req,res){
    const perPage = 32;
    let page = parseInt(req.query.page) || 1;
    let keyword = req.query.keyword || '';
    keyword = keyword.trim(); //去掉頭尾的空白

    // res.locals.keyword = keyword; // 傳給template
    const output = {

    };

    let where = "WHERE 1 ";
    if(keyword){
        output.keyword = keyword;
        where += ` AND \`course\`.\`course_name\` LIKE ${ db.escape('%' + keyword + '%') } `;
    }
    // 有其他條件可以用差不多的寫法加在sql後面

    const t_sql = `SELECT COUNT(1) totalRows FROM course ${where}`;
    const [[{ totalRows }]] = await db.query(t_sql);
    
    output.totalRows = totalRows;
    output.totalPages = Math.ceil(totalRows / perPage);
    output.perPage = perPage;
    output.rows = [];
    output.page = page;

    // 如果有資料才去取得分業的資料
    if (totalRows > 0) {
        if (page < 1) {
            output.redirect = '?page=1'
            return output;

            /*
            // 下面是原本的寫法，但在用redirect的function時，就不能這樣寫
            // return res.redirect(req.baseUrl);// 會轉到根目錄
            // return res.redirect('?page=1');
            */
        }
        if (page > output.totalPages) {
            output.redirect = '?page=' + output.totalPages;
            return output;

            /*
            // return res.redirect('?page=1' + output.totalPages);
            */
        }
        const sql = `SELECT * FROM \`course\` ${where} ORDER BY course.sid DESC LIMIT ${(page-1)*perPage}, ${perPage}`;
        /* 如果要用backtick，在名稱的地方要加上\`做跳脫 */
        const [rows] = await db.query(sql)
        output.rows = rows;
    }
    return output;
}

router.get('/api/list', async (req, res)=>{
    const output = await getListData(req, res);
    res.json(output);
});
// router.route("/cover")
//   .post(uploadCourseImg.single("course_img"), async (req, res) => {
//     const output = {
//       success: false,
//       error: "",
//       postData: req.body,
//     };

//     const sql = `UPDATE \`course\` SET \`course_img\` = ? WHERE \`sid\` = ?`;

//     try {
//       [result] = await db.query(sql, [req.file.filename, req.body.sid]);
//     } catch (ex) {
//       output.error = ex.toString();
//     }
//     output.result = result;
//     if (result.affectedRows === 1) {
//       if (result.changedRows === 1) {
//         output.success = true;
//       } else {
//         output.error = "資料沒有變更";
//       }
//     }

//     res.json(output);
//   });
router.get("/edit", async (req, res) => {
    // let courseSid = ;
    const sql = `SELECT * FROM \`course\` WHERE sid=?`;
    const [rs] = await db.query(sql, [req.query.courseSid]);
    res.json(rs);
  });
  
  


module.exports = router;