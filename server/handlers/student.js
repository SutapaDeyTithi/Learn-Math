const pool = require("../utils/db");

exports.getTopic = async(req, res) => {
    console.log("Request for topics");
    try {        
        const newsub=await pool.query("SELECT * FROM \"Topic\"");
        res.json(newsub.rows);
    } catch (error) {        
    }
}

exports.getSubtopic = async(req, res) => {
    console.log("Request for subtopics");
    try {
        const newsub=await pool.query("SELECT * FROM \"Subtopic\"");
        res.json(newsub.rows);
    } catch (error) { 
        console.log(error);       
    }
}

exports.getCategory = async(req, res) => {
    console.log("Request for categories");
    try {   
        const newsub=await pool.query("SELECT * FROM \"Category\"");
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);     
    }
}

exports.getMCQ = async(req, res) => {
    console.log("Request for mcq");
    try {
        const newsub=await pool.query("SELECT * FROM \"MCQ\"");
        res.json(newsub.rows);
    } catch (error) {
        console.log(error);  
    }
}