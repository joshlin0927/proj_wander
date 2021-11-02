const express = require('express');
const router = express.Router();
const CartItem = require('./../modules/CartItem');

// router.use((req, res, next)=>{
//     // 判斷有沒有通過 jwt 驗證 (寫在 index.js 主程式)
//     if(req.myAuth && req.myAuth.id){
//         next();
//     } else {
//         res.json({success: false, error:'沒有 token 或者 token 不合法'});
//     }
// });


// 讀取單一會員購物車(GET)
router.get('/list', async(req, res)=>{
    res.json(await CartItem.getList(req.query.member_sid));
})

// 新增(POST)
router.post('/add', async(req, res)=>{
    res.json(await CartItem.add(req.body.member_sid, req.body.product_sid));
})

// // 修改(PUT)
// router.put('/edit', async(req, res)=>{
//     res.json(await CartItem.update(req.body.member_sid, req.body.product_sid));
// })

// 刪除(DELETE)
router.delete('/delete', async(req, res)=>{
    res.json(await CartItem.remove(req.body.member_sid, req.body.product_sid));
})

// 清空(CLEAR)
router.delete('/clear', async(req, res)=>{
    res.json(await CartItem.clear(req.query.member_sid));
})


module.exports = router;