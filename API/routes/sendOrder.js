const express = require('express');
const router = express.Router();
const OrderMain = require('../modules/OrderMain');
const OrderDetail = require('../modules/OrderDetail');

// 讀取單一會員單一訂單細節(GET)
router.get('/detailList', async(req, res)=>{
    res.json(await OrderMain.getDetailList(req.query.member_sid, req.query.order_id));
})
// 讀取單一會員訂單細節(GET)
router.get('/list', async(req, res)=>{
    res.json(await OrderMain.getList(req.query.member_sid));
})

// 新增main
router.post('/add/main', async(req, res)=>{
    res.json(await OrderMain.add(req));
})
// 新增detail
router.post('/add/detail', async(req, res)=>{
    res.json(await OrderDetail.add(req.body.order_main_id, req.body.product_sid));
})

// 修改(PUT)
router.put('/edit', async(req, res)=>{
    res.json(await OrderMain.statusToOne(req.query.order_id));
})


module.exports = router;