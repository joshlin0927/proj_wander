const db = require('./connect-mysql');

const tableName = 'cart'; // 設定資料表名稱

class CartItem{
    constructor(defaultObj = {}){
        this.data = defaultObj;
    }
    // 讀取會員ID對應的購物車內容(包含產品資料)
    static async getList(member_sid){
        const output = {
            success: false,
            result: '',
        }
        const sql = `SELECT cart.member_sid, cart.product_sid, course.course_name, course.course_img, course.course_price, course.course_status FROM cart LEFT JOIN course ON cart.product_sid=course.sid WHERE \`member_sid\`=?`;
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
    static async findItem(member_sid, product_sid){
        const sql = `SELECT * FROM ${tableName} WHERE member_sid=? AND product_sid=?`;
        const [result] = await db.query(sql, [member_sid, product_sid]);
        if(result && result.length===1){
            return result[0];
        }else{
            return null;
        }
    }

    // 保存至購物車
    static async add(member_sid, product_sid){
        const output = {
            success: false,
            error: '',
        }
        // TODO: 三個參數都必須要有資料

        // 不要重複輸入資料
        if(await CartItem.findItem(member_sid, product_sid)){
            output.error = "資料重複了";
            return output;
        }

        const sql = `INSERT INTO \`cart\` (\`member_sid\`, \`product_sid\`) VALUES (?, ?)`;
        const [r] = await db.query(sql, [member_sid, product_sid]);
        output.success = !!r.affectedRows ? true : false;
        output.cartList = await CartItem.getList(member_sid);
        return output;
    }

    // // 修改項目
    // static async update(member_sid, product_sid){

    // }

    // 刪除項目
    static async remove(member_sid, product_sid){
        const output = {
            success: false,
            error: '',
        }
        const sql = `DELETE FROM ${tableName} WHERE member_sid=? AND product_sid=?`;
        const [r] = await db.query(sql, [member_sid, product_sid]);
        if(r.affectedRows===1){
            output.success = true;
        }else{
            output.success = false;
            output.error = '刪除失敗';
        }
        return output;
    }

    // 清空購物車
    static async clear(member_id){
        const output = {
            success: false,
            error: '',
        }
        const sql = `DELETE FROM ${tableName} WHERE member_sid=?`;
        const [r] = await db.query(sql, [member_id]);
        if(r.affectedRows===0){
            output.success = false;
            output.error = '無項目可刪除';
        }else{
            output.success = true;
        }
        return output;
    }
}

module.exports = CartItem;