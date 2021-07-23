require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// const pool=require("./utils/db");

// IMPORT MODULES
const {
    signUp,
    login
} = require("./handlers/users");

const {
    getTopic,
    getSubtopic,
    getMCQ,
    getCategory,
    getTrueFalse,
    getTutorial,
    getProblemsOfWeek,
    POTW_ans_upload
} = require("./handlers/student");

const {
    uploadQues,
    getSubtopic_from_a_topic,
    getCategory_from_a_subtopic,
   
} = require("./handlers/instructor");

// COMMON
app.post('/signUp', signUp);
app.post('/login', login);

// STUDENT
app.get('/topic', getTopic);
app.get('/subtopic', getSubtopic);
app.get('/category', getCategory);
app.get('/mcq', getMCQ);
app.get('/true',getTrueFalse);
app.get('/tutorial',getTutorial);
app.get('/POTWQuestion',getProblemsOfWeek);
app.post('/uploadAnsPOTW',POTW_ans_upload);

// INSTRUCTOR
app.get('/subtopics_instructor', getSubtopic_from_a_topic);
app.get('/category_instructor', getCategory_from_a_subtopic);
app.post('/uploadQues', uploadQues);

// MODERATOR


app.listen(5000, ()=>{
    console.log("listening on port 5000..");
})

//npm run start
//npm run nodemon


