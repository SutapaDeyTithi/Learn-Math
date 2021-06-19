const express = require("express");
const app = express();
const cors = require("cors");
const pool=require("./db");
app.use(cors());
app.use(express.json());


app.post('/', async(req,res)=>{
    try {
        // const { topicname, subtopic } = req.body;
        // var topicname=req.body.topicName;
        // var subtopic=req.body.subtopic_name;
        const username=req.body.username;
        const email=req.body.email;
        const pass=req.body.pass;
        const roletype=req.body.roletype;
        const classnum=req.body.class;
        console.log(username);
        console.log(email);
        console.log(pass);
        console.log(roletype);
        console.log(classnum);
        //console.log();
        const newsub=await pool.query("INSERT INTO user_data(username,email,pass,roletype,class) VALUES($1,$2,3,$4,$5)",[username,email,pass,roletype,classnum]);
        // console.log("inserted");
        // INSERT INTO subtopics(topicName,subtopic_name) VALUES('Algebra','GCD/LCM')
        res.json(newsub);
    } catch (error) {
        
    }
});

app.get('/topic', async(req,res)=>{
    try {
        
        const newsub=await pool.query("SELECT * FROM final_subtopic");
        // console.log("inserted");
        // INSERT INTO subtopic(topicName,subtopic_name) VALUES('Geometry','Circles');

        res.json(newsub.rows);
    } catch (error) {        
    }
});

app.get('/', async(req,res)=>{
    try {
        
        const newsub=await pool.query("SELECT * FROM topic");
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
        //INSERT INTO category(sub_name,cate_name) VALUES('GCD/LCM','Calculate GCD/LCM');

        res.json(newsub.rows);
    } catch (error) {
        
    }
});

app.get('/mcq',async(req,res)=>{
    try {
        
        const newsub=await pool.query("SELECT * FROM multiple_answer");
        // console.log("inserted");
        // INSERT INTO subtopic(topicName,subtopic_name) VALUES('Geometry','Circles');
        //INSERT INTO category(sub_name,cate_name) VALUES('GCD/LCM','Calculate GCD/LCM');

        res.json(newsub.rows);
    } catch (error) {
        
    }
});

app.listen(5000,()=>{
    console.log("listening");
})

//npm run start
//npm run nodemon