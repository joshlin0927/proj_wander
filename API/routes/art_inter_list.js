const express = require('express');
const db = require('../modules/connect-mysql');
const upload = require('../modules/upload-images');

const router = express.Router();

router.get('/list/:articleSid', async (req, res) => {
    res.locals.pageName = 'ab-list';
 
    const output = await getListData(req,res);
    if(output.redirect){
        return res.redirect(output.redirect);
    }

    // res.json(output);
    res.render('article_inter/list', output);
});

async function getListData(articleSid){
    const output = {
        success: false,
        result: '',
    }
    const sql =
        `SELECT * FROM article_inter WHERE sid=?`;
    const [r] = await db.query(sql, [articleSid]);
    if (r.length === 0) {
        output.success = false;
        output.result = '沒有資料';
    } else {
        output.success = true;
        output.result = r;
    }
    console.log('articleSid', articleSid);
    return output;
}

router.get('/api/list/:articleSid', async (req, res)=>{
    const output = await getListData(req.params.articleSid);
    res.json(output);
});




    router.route('/add')
    .get(async (req, res) => {
        res.locals.pageName = 'ab-add';
        res.render('article_inter/add');
    })
    .post(async (req, res) => {
        // TODO: 欄位檢查
        const output = {
            success: false,
        }

        // const sql = "INSERT INTO `address_book`(" +
        //     "`name`, `email`, `mobile`, `birthday`, `address`, `created_at`) VALUES (?, ?, ?, ?, ?, NOW())";

        // const [result] = await db.query(sql, [
        //     req.body.name,
        //     req.body.email,
        //     req.body.mobile,
        //     req.body.birthday,
        //     req.body.address,
        // ]);


        // mysql2 的套件語法，並不是標準的sql寫法
        const input = {
            ...req.body,
            created_date: new Date()
        };
        const sql = "INSERT INTO `article_inter` SET ?"
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
            result
        });



        res.json(output);
    })

    router.delete('/delete/:sid([0-9]+)', async (req, res) => {
        // '/delete/:sid([0-9]+' 以防用戶在網址列輸入數值以外的東西
        const sql = "DELETE FROM article_inter WHERE sid=?";
        const [result] = await db.query(sql, [req.params.sid]);
        console.log({
            result
        });
        res.json(result);
    });


    router.get("/edit", async (req, res) => {
        // let courseSid = ;
        const sql = `SELECT * FROM \`article_inter\` WHERE sid=?`;
        const [rs] = await db.query(sql, [req.query.Sid]);
        res.json(rs);
      });
      
      router.post("/edit", async (req, res) => {
        const output = {
          success: false,
          postData: req.body,
        };
      
        const input = {
          ...req.body,
        };
      
        // console.log(input);
        const sql = `UPDATE \`article_inter\` SET ? WHERE sid=?`;
        let result = {};
        // 處理修改資料時可能的錯誤
        try {
          [result] = await db.query(sql, [input, req.query.Sid]);
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