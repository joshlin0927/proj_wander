const express = require("express");
const db = require("../modules/connect-mysql");
const router = express.Router();

async function getListData(req, res) {
    let easiness = parseInt(req.query.easiness) || 0; //傳入難度
    let language = req.query.language.toString() || ''; //傳入語系
    const output = {
        success: false,
        rows: [],
    };
    if(language !== '' && easiness !== 0 ){
        const sql = `SELECT * FROM \`sentence_game\` WHERE \`language\` LIKE '${language}' AND \`easiness\` = ${easiness} ORDER BY \`easiness\` ASC`;
        const [rows] = await db.query(sql);
        output.success = true;
        output.rows = rows;
    }else{
        output.success = false;
        output.rows = [];
    }
    
    
    return output;
}
router.getListData = getListData; //在router上使用一個與function相同的變數


//SELECT
router.get("/api/list", async (req, res) => {
    const output = await getListData(req, res);
    res.json(output);
});

module.exports = router;
