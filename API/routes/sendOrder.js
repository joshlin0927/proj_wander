const express = require('express');
const router = express.Router();
const SendOrderMain = require('../modules/SendOrderMain');
const SendOrderDetail = require('../modules/SendOrderDetail');

// 讀取單一
router.get('/list', async(req, res)=>{
    res.json(await SendOrder.getList(req.query.member_sid));
})

// 新增main
router.post('/add/main', async(req, res)=>{
    res.json(await SendOrderMain.add(req));
})
// 新增detail
router.post('/add/detail', async(req, res)=>{
    res.json(await SendOrderDetail.add(req.body.order_main_id, req.body.product_sid));
})

// // 修改(PUT)
// router.put('/edit', async(req, res)=>{
//     res.json(await CartItem.update(req.body.member_sid, req.body.product_sid));
// })

// 刪除(DELETE)
router.delete('/delete', async(req, res)=>{
    res.json(await SendOrder.remove(req.body.member_sid, req.body.product_sid));
})

// 清空(CLEAR)
router.delete('/clear', async(req, res)=>{
    res.json(await SendOrder.clear(req.body.member_sid));
})


module.exports = router;