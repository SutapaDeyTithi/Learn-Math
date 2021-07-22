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
    getCategory
} = require("./handlers/student");

const {
    uploadQues,
    getSubtopic_from_a_topic,
    getCategory_from_a_subtopic,
    uploadTutorial,
    uploadWrittenQues,
    getAnswerPapers
} = require("./handlers/instructor");

const {
    answerImage,
    TutorialIamge,
    TutorialVideo
} = require("./utils/fileUploader")

// COMMON
app.post('/signUp', signUp);
app.post('/login', login);

// STUDENT
app.get('/topic', getTopic);
app.get('/subtopic', getSubtopic);
app.get('/category', getCategory);
app.get('/mcq', getMCQ);


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

app.get('/answerPapers', getAnswerPapers)

// MODERATOR


app.listen(5000, ()=>{
    console.log("listening on port 5000..");
})

//npm run start
//npm run nodemon


// "start": "node index.js",
//  convert_from( decode($content , 'base64'),'UTF8')