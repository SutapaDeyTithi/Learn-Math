require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
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
    getProblemsOfWeek_s,
    POTW_ans_upload,
    POTW_ans_upload_s,
    Rating_change,
    past_challenges,
    get_prev_contests

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
// app.get('/POTWQuestion',getProblemsOfWeek);
app.get('/POTWQuestion_s',getProblemsOfWeek_s);
app.post('/uploadAnsPOTW',POTW_ans_upload);
app.post('/uploadAnsPOTW_s',POTW_ans_upload_s);
app.post('/rating_change',Rating_change);
app.post('/pastContests',past_challenges);
app.get('/prev_contests',get_prev_contests);

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


