const db = require('./connect-mysql');

const tableName = 'chat_message'; // 設定資料表名稱

class Message{
    constructor(defaultObj = {}){
        this.data = defaultObj;
    }
    // 讀取購物車並呈現
    static async getList(conversationID){
        const sql = `SELECT * FROM ${tableName} WHERE conversationID=?`;
        const [r] = await db.query(sql, [conversationID]);
        if(r && r.length!==0){
            return r;
        }else{
            return null;
        }
    }

    // 讀取最新一筆
    static async getLastMessage(conversationID){
        const sql = `SELECT * FROM ${tableName} WHERE conversationID=? ORDER BY created_at DESC`;
        const [r] = await db.query(sql, [conversationID]);
        if(r && r.length!==0){
            return r[0];
        }else{
            return null;
        }
    }

    // 保存至購物車
    static async add(obj){
        const output = {
            success: false,
            error: '',
        }

        const input = {
            ...obj
        };

        const sql = `INSERT INTO ${tableName} SET ?`;
        const [r] = await db.query(sql, [input]);
        if(r.affectedRows!==0){
            const sql = `SELECT * FROM ${tableName} WHERE sid=?`;
            const [rs] = await db.query(sql, [r.insertId]);
            output.success = true;
            output.result = rs;
        }else{
            output.error = '新增失敗';
        }
        return output;
    }

}

module.exports = Message;