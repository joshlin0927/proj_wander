const express = require('express');
const router = express.Router();
const StCalendar = require('../modules/StCalendar');

// 讀取單一會員月曆(GET)
router.get('/list', async(req, res)=>{
    res.json(await StCalendar.getList(req.query.member_sid));
})

// 新增
router.post('/add', async(req, res)=>{
    res.json(await StCalendar.add(req.body.member_sid, req.body.course_name, req.body.start, req.body.end));
})

// 修改(PUT)
router.put('/edit', async(req, res)=>{
  res.json(await StCalendar.edit(req.body.start, req.body.end, req.body.member_sid, req.body.course_name));
})

router.delete('/delete', async (req, res) => {
    const output={
        body:req.body,
        result: await StCalendar.delete(req.body.member_sid, req.body.course_name)
    }
    
    
    res.json(output);
})

module.exports = router;