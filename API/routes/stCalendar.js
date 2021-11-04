const express = require('express');
const router = express.Router();
const StCalendar = require('../modules/StCalendar');

// 讀取單一會員月曆(GET)
router.get('/list', async(req, res)=>{
    res.json(await StCalendar.getList(req.query.member_sid));
})

// 新增
router.post('/add', async(req, res)=>{
    res.json(await StCalendar.add(req.body.member_sid, req.body.course_name));
})

// 修改(PUT)
router.put('/edit', async(req, res)=>{
    res.json(await StCalendar.edit(req));
})


module.exports = router;