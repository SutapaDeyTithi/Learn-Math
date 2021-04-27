const express = require("express");
const app = express();
const cors = require("cors");
const pool=require("./db");
app.use(cors());
app.use(express.json());




app.post('/', async(req,res)=>{
    try {
        const { topicname, subtopic } = req.body;
        // var topicname=req.body.topicName;
        // var subtopic=req.body.subtopic_name;
        console.log(req.body);
        const newsub=await pool.query("INSERT INTO subtopics(topicName,subtopic_name) VALUES($1,$2)",[topicname,subtopic]);
        // console.log("inserted");
        // INSERT INTO subtopics(topicName,subtopic_name) VALUES('Algebra','GCD/LCM')
        res.json(newsub);
    } catch (error) {
        
    }
});
app.get('/topic', async(req,res)=>{
    try {
        
        const newsub=await pool.query("SELECT * FROM subtopic");
        // console.log("inserted");
        // INSERT INTO subtopic(topicName,subtopic_name) VALUES('Geometry','Circles');

        res.json(newsub.rows);
    } catch (error) {
        
    }
});
app.get('/subtopic', async(req,res)=>{
    try {
        
        const newsub=await pool.query("SELECT * FROM category");
        // console.log("inserted");
        // INSERT INTO subtopic(topicName,subtopic_name) VALUES('Geometry','Circles');

        res.json(newsub.rows);
    } catch (error) {
        
    }
});

app.get("/topic/:id", async(req,res)=>{
    try {
        
        const { newsub }=req.params;
         const subtop=await pool.query("SELECT * from subtopic where subtopic_id=$1",[newsub]);
        res.json(subtop.rows[0]);
        // console.log("inserted");
        // INSERT INTO subtopic(topicName,subtopic_name) VALUES('Geometry','Circles');

       
    } catch (error) {
        
    }
});


app.listen(5000,()=>{
    console.log("listening");
})
//npm run start
//npm run nodemon