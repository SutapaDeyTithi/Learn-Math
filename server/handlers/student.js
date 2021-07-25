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

exports.Rating_change = async(req, res) => {
    const newanswer = {
        u_id:req.body.u_id,
        level:req.body.level,
        rank:req.body.rank
    };
    console.log("hello");
    console.log(newanswer.u_id);
    
    pool.query("INSERT INTO \"users_rating\"(u_id,level,rank) VALUES($1, $2, $3)",
                        [newanswer.user_id, newanswer.level, newanswer.rank]);
}