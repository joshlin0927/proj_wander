const db = require('./connect-mysql');

const tableName = 'schedule'; // 設定資料表名稱

class StCalendar {
    constructor(defaultObj = {}) {
        this.data = defaultObj;
    }
    static async getList(member_sid) {
        const output = {
            success: false,
            result: '',
        }
        const sql =
            `SELECT * FROM ${tableName} WHERE member_sid=?`;
        const [r] = await db.query(sql, [member_sid]);
        if (r.length === 0) {
            output.success = false;
            output.result = '沒有資料';
        } else {
            output.success = true;
            output.result = r;
        }
        return output;
    }

    static async findItem(member_sid, course_name) {
        const sql = `SELECT * FROM ${tableName} WHERE member_sid=? AND title=?`;
        const [result] = await db.query(sql, [member_sid, course_name]);
        if (result && result.length === 1) {
            return result[0];
        } else {
            return null;
        }
    }

    // 新增訂單
    static async add(member_sid, course_name) {
        const output = {
            success: false,
            error: '',
        }
        await course_name.forEach(async (v, i) => {
            // 不要重複輸入資料
            if (await StCalendar.findItem(member_sid, v)) {
                output.error = "訂單已存在";
                return output;
            }
            const sql = `INSERT INTO ${tableName} (\`member_sid\`, \`title\`) VALUES (?, ?)`;
            const [r] = await db.query(sql, [member_sid, v]);
        });
        output.success = true;
        return output;
    }

    static async edit(order_id) {
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

module.exports = StCalendar;