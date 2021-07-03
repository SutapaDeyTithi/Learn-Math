const pool = require("../utils/db");

exports.uploadQues = async(req, res) => {
    console.log("Uploading Ques..");
    console.log(req);
    res.json("Received Question!");
    // try {        
    //     const newsub=await pool.query("SELECT * FROM \"Topic\"");
    //     console.log(newsub.rows);
    //     res.json(newsub.rows);
    // } catch (error) {        
    // }
}
