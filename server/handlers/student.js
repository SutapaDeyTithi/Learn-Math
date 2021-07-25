const pool = require("../utils/db");

exports.getTopic = async(req, res) => {
    console.log("Request for topics");
    try {        
        const newsub=await pool.query("SELECT * FROM \"Topic\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {        
    }
}

exports.getSubtopic = async(req, res) => {
    console.log("Request for subtopics");
    try {
        const newsub=await pool.query("SELECT * FROM \"Subtopic\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) { 
        console.log(error);       
    }
}

exports.getCategory = async(req, res) => {
    console.log("Request for categories");
    try {   
        const newsub=await pool.query("SELECT * FROM \"Category\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);     
    }
}

exports.getMCQ = async(req, res) => {
    console.log("Request for mcq");
    try {
        const newsub=await pool.query("SELECT * FROM \"MCQ\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);  
    }
}
exports.getTrueFalse = async(req, res) => {
    console.log("Request for TrueFalse");
    try {
        const newsub=await pool.query("SELECT * FROM \"True_False\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);  
    }
}
exports.getTutorial = async(req, res) => {
    console.log("Request for Tutorial");
    try {
        const newsub=await pool.query("SELECT * FROM \"Tutorial\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);  
    }
}
exports.getProblemsOfWeek = async(req, res) => {
    console.log("Request for POTW");
    try {
        const newsub=await pool.query("SELECT * FROM \"Problems_of_the_week_question\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);  
    }
}
exports.getProblemsOfWeek_s = async(req, res) => {
    console.log("Request for POTW");
    try {
        const newsub=await pool.query("SELECT * FROM \"ExamQuestion\"");
        console.log(newsub.rows);
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);  
    }
}
exports.POTW_ans_upload = async(req, res) => {
    const newanswer = {
        email: req.body.email,
        image1: req.body.image1,
        contest_name:req.body.contest_name,
        question_id : req.body.question_id
    };
    pool.query("INSERT INTO \"Problems_of_the_week_answer\"(email, image1,contest_name,question_id) VALUES($1, $2, $3, $4)",
                        [newanswer.email, newanswer.image1, newanswer.contest_name,newanswer.question_id]);
}
exports.POTW_ans_upload_s = async(req, res) => {
    const newanswer = {
        question_id :req.body.question_id,
        exam_id:req.body.exam_id,
        answer :req.body.answer,
        submitted_by:req.body.submitted_by
    };
    pool.query("INSERT INTO \"ExamAnswer\"(question_id, exam_id,answer,submitted_by) VALUES($1, $2, $3, $4)",
                        [newanswer.question_id, newanswer.exam_id, newanswer.answer,newanswer.submitted_by]);
    console.log(req.body);
}

exports.Rating_change = async(req, res) => {
    const newanswer = {
        user_id:req.body.user_id,
        level:req.body.level,
        rank:req.body.rank
    };
    console.log(req.body);
    pool.query("UPDATE \"Users\" SET level=$1,rank=$3 WHERE user_id = $2",
                                                        [newanswer.level, newanswer.user_id,newanswer.rank], (err, result) => {
                                                            if (err) {
                                                                console.error('Error executing query', err.stack);
                                                                return res.json("error");
                                                            }
                                                            else {
                                                                // return res.json("OK");
                                                                //console.log(userID, " contributed --> ", contri);
                                                            }
                                                        });
}