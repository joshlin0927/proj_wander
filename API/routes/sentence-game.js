const express = require("express");
const db = require("../modules/connect-mysql");
const router = express.Router();
const client = require('soundoftext-js');

async function getListData(req, res) {
    let easiness = parseInt(req.query.easiness) || 0; //傳入難度
    let language = req.query.language.toString() || ''; //傳入語系
    const output = {
        success: false,
        rows: [],
    };
    if(language !== '' && easiness !== 0 ){
        const sql = `SELECT * FROM \`sentence_game\` WHERE \`language\` LIKE ? AND \`easiness\` = ? ORDER BY \`easiness\` ASC`;
        const [rows] = await db.query(sql, [language, easiness]);
        output.success = true;
        output.rows = rows;
    }else{
        output.success = false;
        output.rows = [];
    }
    
    
    return output;
}

//SELECT
router.get("/api/list", async (req, res) => {
    const output = await getListData(req, res);
    res.json(output);
});

//SOT
router.post('/sound-of-text', async (req, res)=>{
    const word = req.body.word;
    const language = req.body.lang;
    
    await client.sounds.request({ text: word, voice: `${language}` })
    .then(response => {
        res.json(response);
    })
    .catch(e => {
        console.log(e);
    });
});

module.exports = router;
