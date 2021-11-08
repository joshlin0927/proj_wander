const express = require('express');
const db = require('../modules/connect-mysql');
const upload = require('../modules/upload-images');

const router = express.Router();

async function getListData(req,res){
    const perPage = 5;
    let page = parseInt(req.query.page) || 1;
    let keyword = req.query.keyword || '';
    keyword = keyword.trim(); //去掉頭尾的空白

    // res.locals.keyword = keyword; // 傳給template
    const output = {

    };

    let where = "WHERE 1 ";
    if(keyword){
        output.keyword = keyword;
        where += ` AND \`name\` LIKE ${ db.escape('%' + keyword + '%') } `;
    }
    // 有其他條件可以用差不多的寫法加在sql後面

    const t_sql = `SELECT COUNT(1) totalRows FROM member ${where}`;
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
        const sql = `SELECT * FROM \`member\` ${where} ORDER BY member.sid DESC LIMIT ${(page-1)*perPage}, ${perPage}`;
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

router.get('/findOne', async(req, res)=>{
    const output = {
        success: false,
        result: '',
    }
    const sql = `SELECT * FROM member WHERE \`sid\`=?`;
    const [r] = await db.query(sql, [req.query.memberID]);
    if(r.length === 0){
        output.success = false;
        output.result = '沒有資料';
    }else{
        output.success = true;
        output.result = r;
    }
    res.json(output);
})


router.route('/edit/:sid')
    .get(async (req, res) => {
        const sql = "SELECT * FROM member WHERE sid=?";
        const [rs] = await db.query(sql, [req.params.sid]);

        if (rs.length) {
            res.render('member/edit', {
                row: rs[0]
            });
        } else {
            res.redirect('/member/list');
        }
    })
    .post(async (req, res) => {
        // TODO: 欄位檢查
        const output = {
            success: false,
            postData: req.body,
        }

        const input = {
            ...req.body
        };
        const sql = "UPDATE `member` SET ? WHERE sid=?";
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
                output.error = '資料沒有變更';
            }
        }

        res.json(output);
    });


module.exports = router;