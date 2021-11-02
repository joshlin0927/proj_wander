const express = require('express');
const router = express.Router();
const OrderMain = require('../modules/OrderMain');
const OrderDetail = require('../modules/OrderDetail');

// 讀取單一會員購物車(GET)
router.get('/list', async(req, res)=>{
    res.json(await OrderMain.getList(req.query.member_sid, req.query.order_id));
})

// 新增main
router.post('/add/main', async(req, res)=>{
    res.json(await OrderMain.add(req));
})
// 新增detail
router.post('/add/detail', async(req, res)=>{
    res.json(await OrderDetail.add(req.body.order_main_id, req.body.product_sid));
})

module.exports = router;