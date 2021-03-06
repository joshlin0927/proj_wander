const e = require('express');
const multer = require('multer');
const {v4: uuidv4} = require('uuid');

const extMap = {
    'application/pdf': '.pdf',
    'application/msword': '.docx',
};

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, __dirname + '/../public/resume')
    },
    filename: (req, file, cb)=>{
        cb(null, uuidv4() + extMap[file.mimetype])
    },
});

const fileFilter = (req, file, cb)=>{
    cb(null, !!extMap[file.mimetype]);
    // 加兩個驚嘆號就可以把東西轉為布林值的形式
};

module.exports = multer({storage, fileFilter});