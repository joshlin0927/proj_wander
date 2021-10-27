const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const db = require('./../modules/connect-mysql');
const upload = require('./../modules/upload-images');

const router = express.Router();

// 登入
router.get('/login', (req, res) => {
    res.locals.pageName = 'login';
    res.render('login');
});

router.post('/login', async (req, res) => {
    // TODO : 欄位檢查
    const [rs] = await db.query("SELECT * FROM member WHERE `email`=?", [req.body.email.toLowerCase()]);

    if (!rs.length) {
        // 帳號錯誤
        return res.json({
            success: false
        });
    }
    // rs[0]
    const success = await bcrypt.compare(req.body.password, rs[0].password);
    if (success) {
        const {
            id,
            email,
            nickname
        } = rs[0];
        req.session.member = {
            sid,
            email,
            nickname
        };
    }

    res.json({
        success, 
        
    });
});



router.get('/account-check', async (req, res) => {
    const sql = "SELECT `email` FROM member WHERE `email`=?";
    const [rs] = await db.query(sql, [req.query.email]);
    res.json({
        used: !!rs.length
    });


    // if(rs.length){
    //     res.json({used: true});
    // }else{
    //     res.json({used: false});
    // }
})

// 登出
router.get('/logout', (req, res) => {

    // 刪除掉req.session的member
    delete req.session.member;
    res.redirect('/');
});

router.post('/login-jwt', async (req, res) => {
    const output = {
        success: false,
        token: null,
    };
    // TODO : 欄位檢查

    const [rs] = await db.query("SELECT * FROM member WHERE `email`=?", [req.body.email.toLowerCase()]);

    if (!rs.length) {
        // 帳號錯誤
        return res.json({
            output
        });
    }
    // rs[0]
    const success = await bcrypt.compare(req.body.password, rs[0].password);
    // 這裡設定的是登入後的token要給的資料
    if (success) {
        const {
            sid,
            identity,
            email,
            nickname
        } = rs[0];
        // req.session.member = {id, email, nickname};
        output.success = true;
        output.member = {
            sid,
            identity,
            email,
            nickname
        }
        output.token = await jwt.sign({
            sid,
            identity,
            email,
            nickname
        }, process.env.JWT_SECRET);
    }

    res.json(output);
});



module.exports = router;