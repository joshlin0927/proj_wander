const db = require('./connect-mysql');

const tableName = 'order_main'; // 設定資料表名稱

class OrderMain{
    constructor(defaultObj = {}){
        this.data = defaultObj;
    }
    static async getDetailList(member_sid, order_id){
        const output = {
            success: false,
            result: '',
        }
        const sql = 
        `SELECT order_main.*, order_detail.product_sid, course.course_name, course.course_img, course.course_price
        FROM order_main 
        LEFT JOIN order_detail
        ON order_main.order_id = order_detail.order_main_id
        LEFT JOIN course
        ON course.sid = order_detail.product_sid
        WHERE member_sid=? AND order_id=?`;
        const [r] = await db.query(sql, [member_sid, order_id]);
        if(r.length === 0){
            output.success = false;
            output.result = '沒有資料';
        }else{
            output.success = true;
            output.result = r;
        }
        return output;
    }
    static async getList(member_sid){
        const output = {
            success: false,
            result: '',
        }
        const sql = 
        `SELECT * FROM order_main WHERE member_sid=?`;
        const [r] = await db.query(sql, [member_sid]);
        if(r.length === 0){
            output.success = false;
            output.result = '沒有資料';
        }else{
            output.success = true;
            output.result = r;
        }
        return output;
    }


    // 以產品ID跟會員ID找對應產品
    static async findItem(order_id){
        const sql = `SELECT * FROM ${tableName} WHERE order_id=?`;
        const [result] = await db.query(sql, [order_id]);
        if(result && result.length===1){
            return result[0];
        }else{
            return null;
        }
    }

    // 新增訂單
    static async add(OrderMainObj){
        const output = {
            success: false,
            error: '',
        }
        // TODO: 三個參數都必須要有資料

        // 不要重複輸入資料
        if(await OrderMain.findItem(OrderMainObj.order_id)){
            output.error = '訂單已存在';
            return output;
        }
        const input = {
            ...OrderMainObj.body
        }
        const sql = `INSERT INTO ${tableName} SET ?`;
        const [r] = await db.query(sql, [input]);
        output.success = !!r.affectedRows ? true : false;
        console.log('main:', output)
        return output;
    }

    // 從待付款變更為已付款
    static async statusToOne(order_id){
        const output = {
            success: false,
            result: '',
        }
        const sql = `UPDATE ${tableName} SET order_status = 1 WHERE order_id=?`;
        const [r] = await db.query(sql, [order_id]);
        output.success = !!r.affectedRows ? true : false;
        output.result = r;
        return output;
    }

}

module.exports = OrderMain;