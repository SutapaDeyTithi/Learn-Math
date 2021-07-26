require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// const pool=require("./utils/db");

// image upload
// const fileUpload = require('express-fileupload');
// const FileType = require('file-type');
// const formidable = require('express-formidable');
// app.use(formidable());


// app.use(fileUpload());

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
    get_prev_contests,
    getusers,
    // getmail, 
    // Chng_class
    //postname
    

} = require("./handlers/student");

const {
    uploadQues,
    getSubtopic_from_a_topic,
    getCategory_from_a_subtopic,
    uploadTutorial,
    uploadWrittenQues,
    getAnswerPapers,
    loadQues,
    gradeAns,
    loadForwaredQues,
    uploadRevisedQues,
    infoProblemWeek,
    contributionIn
} = require("./handlers/instructor");

const {
    answerImage,
    TutorialIamge,
    TutorialVideo,
    MCQexplnImage,
    MCQquesImage,
    TFquesImage,
    MatchquesImage,
    WquesImage
} = require("./utils/fileUploader")

// MODERATOR 
const {

    get_forum_ques,
    get_Topic,
    get_forum_answer,
    get_User,
    post_forum_ques,
    postforums,
  } = require("./handlers/moderator");

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
app.get('/all_user',getusers);
// app.post('/mail_change',getmail);
// app.post('/class_change',Chng_class);
// app.post('/name_change',postname);
// app.post('/class_chng',getClass);
// app.post('/name_cng',get_name);


// INSTRUCTOR
app.get('/subtopics_instructor', getSubtopic_from_a_topic);
app.get('/category_instructor', getCategory_from_a_subtopic);
app.post('/uploadQues', uploadQues);
app.post('/uploadTutorial', uploadTutorial);
app.post('/uploadWrittenQues', uploadWrittenQues);

//file upload
app.use(express.static('public'));

// app.post('/uploadImage2', upload.single('file'), (req, res) => {
//     return res.json({ status: 'OK', uploaded: req.files.length });
//   });

// app.post('/uploadImage2', answerImage);

app.post('/uploadTutorialImage/:id', TutorialIamge);
app.post('/uploadTutorialVideo/:id', TutorialVideo);
app.post('/uploadImageMCQques/:id', MCQquesImage);
app.post('/uploadImageMCQexpln/:id', MCQexplnImage);
app.post('/uploadImageMatchingques/:id', MatchquesImage);
app.post('/uploadImageTFques/:id', TFquesImage);
app.post('/WquesImage/:id', WquesImage);

app.get('/answerPapers', getAnswerPapers);
app.get('/loadQues/:id', loadQues);
app.post('/gradeAns/:id', gradeAns);
app.get('/loadForwaredQues/:id', loadForwaredQues);
app.post('/uploadRevisedQues', uploadRevisedQues);

app.get('/infoProblemWeek', infoProblemWeek);
app.get('/contributionIn', contributionIn);

// MODERATOR
// MODERATOR
//app.get("/todo", getTODOS);
//app.post("/todo", postTODOS);
app.get("/get_forum", get_forum_ques);
app.get("/get_topic", get_Topic);
app.get("/get_forum_ans", get_forum_answer);
app.get("/get_User", get_User);
app.post("/post_forum_ques", post_forum_ques);
app.post("/postforums", postforums);


app.listen(5000, ()=>{
    console.log("listening on port 5000..");
})

//npm run start
//npm run nodemon


// "start": "node index.js",
//  convert_from( decode($content , 'base64'),'UTF8')