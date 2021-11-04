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
    static async add(member_sid, course_name, start, end) {
        const output = {
            success: false,
            error: '',
        }
        // 不要重複輸入資料
        if (await StCalendar.findItem(member_sid, course_name)) {
            output.error = "訂單已存在";
            return output;
        }
        const sql = `INSERT INTO ${tableName} (\`member_sid\`, \`title\`,\`start\`,\`end\`) VALUES (?, ?,?,?)`;
        const [r] = await db.query(sql, [member_sid, course_name,start,end]);
        output.success = true;
        return output;
    }
   
    static async edit(start, end, member_sid, course_name) {
        const output = {
            success: false,
            result: '',
        }

        //UPDATE schedule SET start = "2021-11-19 12:48:06", end = "2021-11-20 12:48:06" WHERE member_sid = 1010 AND title ="Ai老師-初階日文班" 
        const sql = "UPDATE `schedule` SET `start` = ?, `end` = ? WHERE `member_sid` = ? AND  `title` = ?";
        const [r] = await db.query(sql, [start, end, member_sid, course_name]);
        output.success = !!r.affectedRows ? true : false;
        output.result = r;
        return output;
    }

    static async delete(member_sid, course_name){
        const output = {
            success: false,
            result: '',
        }

        const sql = "DELETE FROM `schedule` WHERE `member_sid` = ? AND `title` = ? ";
        const [r] = await db.query(sql, [member_sid, course_name]);
        output.success = !!r.affectedRows ? true : false;
        output.result = r;
        return output;
    }

}

module.exports = StCalendar;