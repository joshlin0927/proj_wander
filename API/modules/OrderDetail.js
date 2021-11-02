const db = require("./connect-mysql");

const tableName = "order_detail"; // 設定資料表名稱

class OrderDetail {
    constructor(defaultObj = {}) {
        this.data = defaultObj;
    }
    // 以訂單ID跟產品ID找對應訂單
    static async findItem(order_main_id, product_sid) {
        const sql = `SELECT * FROM ${tableName} WHERE order_main_id=? AND product_sid=?`;
        const [result] = await db.query(sql, [order_main_id, product_sid]);
        if (result && result.length === 1) {
            return result[0];
        } else {
            return null;
        }
    }

    // 新增訂單
    static async add(order_main_id, product_sid_arr) {
        const output = {
            success: false,
            error: "",
        };

        await product_sid_arr.forEach(async (v, i) => {
            // 不要重複輸入資料
            if (await OrderDetail.findItem(order_main_id, v)) {
                output.error = "訂單已存在";
                return output;
            }
            const sql = `INSERT INTO ${tableName} (\`order_main_id\`, \`product_sid\`) VALUES (?, ?)`;
            const [r] = await db.query(sql, [order_main_id, v]);
        });
        output.success = true;
        console.log('detail:', output);
        return output;
    }
}

module.exports = OrderDetail;
