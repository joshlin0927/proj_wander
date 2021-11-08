const express = require("express");
const db = require("../modules/connect-mysql");
const uploadVid = require("../modules/upload-videos");

const router = express.Router();

async function getListData(req, res) {
  const perPage = 5;
  let page = parseInt(req.query.page) || 1;

  const output = {};

  // SELECT `video_list`.*, `member`.`firstname`, `course`.`course_name` FROM `video_list` LEFT JOIN `member` ON `video_list`.`teacher_sid`=`member`.`sid`LEFT JOIN `course` ON `course`.`sid`=`video_list`.`course_sid` WHERE `member`.`sid`=1;

  let courseSid = req.query.courseSid;

  let where = `LEFT JOIN \`member\` ON \`video_list\`.\`teacher_sid\`=\`member\`.\`sid\`LEFT JOIN \`course\` ON \`course\`.\`sid\`=\`video_list\`.\`course_sid\` WHERE \`video_list\`.\`course_sid\` = ${courseSid} `;

  const t_sql = `SELECT COUNT(1) totalRows FROM \`video_list\` ${where}`;

  const [[{ totalRows }]] = await db.query(t_sql);

  output.totalRows = totalRows;
  output.totalPages = Math.ceil(totalRows / perPage);
  output.perPage = perPage;
  output.rows = [];
  output.page = page;

  // 如果有資料才去取得分業的資料
  if (totalRows > 0) {
    if (page < 1) {
      output.redirect = "?page=1";
      return output;
    }
    if (page > output.totalPages) {
      output.redirect = "?page=" + output.totalPages;
      return output;

      // return res.redirect('?page=1' + output.totalPages);
    }
    const sql = `SELECT \`video_list\`.*, \`member\`.\`firstname\`, \`course\`.\`course_name\` FROM \`video_list\` ${where} ORDER BY \`course\`.\`sid\` DESC `;
    // LIMIT ${
    //   (page - 1) * perPage
    // }, ${perPage}`;
    /* 如果要用backtick，在名稱的地方要加上\`做跳脫 */
    const [rows] = await db.query(sql);
    output.rows = rows;
  }
  return output;
}

// app.get("/video", function (req, res) {
//   // Ensure there is a range given for the video
//   const range = req.headers.range;
//   if (!range) {
//     res.status(400).send("Requires Range header");
//   }

//   // get video stats (about 61MB)
//   const videoPath = "public/video/DAGA KOTOWARU.mp4";
//   const videoSize = fs.statSync(videoPath).size;

//   // Parse Range
//   // Example: "bytes=32324-"
//   const CHUNK_SIZE = 10 ** 6; // 要再調整
//   const start = Number(range.replace(/\D/g, ""));

//   const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

//   // Create headers
//   const contentLength = end - start + 1;
//   const headers = {
//     "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//     "Accept-Ranges": "bytes",
//     "Content-Length": contentLength,
//     "Content-Type": "video/mp4",
//   };

//   // HTTP Status 206 for Partial Content
//   res.writeHead(206, headers);

//   // create video read stream for this particular chunk
//   const videoStream = fs.createReadStream(videoPath, {
//     start,
//     end,
//   });

//   // Stream the video chunk to the client
//   videoStream.pipe(res);
// });

router.get("/api/list", async (req, res) => {
  const output = await getListData(req, res);
  res.json(output);
});

router.delete("/delete/:sid([0-9]+)", async (req, res) => {
  // '/delete/:sid([0-9]+' 以防用戶在網址列輸入數值以外的東西
  const sql = "DELETE FROM video_list WHERE sid=?";
  const [result] = await db.query(sql, [req.params.sid]);
  console.log({
    result,
  });
  res.json(result);
});

router.route("/add").post(uploadVid.single("video_link"), async (req, res) => {
  // TODO: 欄位檢查
  const output = {
    success: false,
  };

  // mysql2 的套件語法，並不是標準的sql寫法
  const input = {
    ...req.body,
    created_at: new Date(),
    video_link: req.file.filename,
    // 上傳檔案的時候要在這多寫個req.file.filename，不然後端接不到檔名，進不到資料庫
  };

  // console.log(input);
  const sql = "INSERT INTO `video_list` SET ?";
  let result = {};
  // 處理新增資料時可能的錯誤
  try {
    [result] = await db.query(sql, [input]);
  } catch (ex) {
    output.error = ex.toString();
  }
  output.result = result;
  if (result.affectedRows && result.insertId) {
    output.success = true;
  }

  console.log({
    result,
  });

  res.json(output);
});

router.get("/edit", async (req, res) => {
  const sql = `SELECT * FROM \`video_list\` WHERE sid=?`;
  const [rs] = await db.query(sql, [req.query.videoSid]);
  res.json(rs);
});

router.post("/edit", async (req, res) => {
  const output = {
    success: false,
    postData: req.body,
  };

  const input = {
    ...req.body,
  };

  // console.log(input);
  const sql = `UPDATE \`video_list\` SET ? WHERE sid=?`;
  let result = {};
  // 處理修改資料時可能的錯誤
  try {
    [result] = await db.query(sql, [input, req.query.videoSid]);
  } catch (ex) {
    output.error = ex.toString();
  }
  output.result = result;
  if (result.affectedRows === 1) {
    if (result.changedRows === 1) {
      output.success = true;
    } else {
      output.error = "資料沒有變更";
    }
  }

  res.json(output);
});

router.route("/LastAdd").get(async (req, res) => {
  // sql = SELECT * FROM `course` ORDER BY `created_at` DESC LIMIT 1;
  const sql =
    "SELECT * FROM `video_list` ORDER BY `created_time` DESC LIMIT 1;";

  [result] = await db.query(sql);

  res.json(result);
});

module.exports = router;
