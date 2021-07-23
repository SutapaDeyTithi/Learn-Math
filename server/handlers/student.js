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
        image2: req.body.image2,
        image3: req.body.image3,
        contest_name:req.body.contest_name
    };
    pool.query("INSERT INTO \"Problems_of_the_week_answer\"(email, image1,image2, image3,contest_name) VALUES($1, $2, $3, $4,$5)",
                        [newanswer.email, newanswer.image1, newanswer.image2,newanswer.image3,newanswer.contest_name]);
}